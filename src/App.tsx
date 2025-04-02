import "./reset.css";
import "./styles.css";
import { useState } from "react";

interface ShoppingListItemProps {
  product: string;
  id: number;
  checked: boolean;
  toggleChecked: (id: number) => void;
}

interface ShoppingListItem {
  product: string;
  id: number;
  checked: boolean;
}

function App() {
  // variables:

  const [products, setProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [hideSelected, setHideSelected] = useState<boolean>(false);

  const [productItems, setProductItems] = useState<ShoppingListItem[]>([
    { product: "kawa", id: 123, checked: false },
    { product: "mleko", id: 456, checked: false },
  ]);

  const toggleChecked = (id: number) => {
    setCheckedItems((checkedItems) => ({
      ...checkedItems,
      [id]: !checkedItems[id],
    }));
  };

  const filteredProducts = hideSelected
    ? products.filter((_, i) => !checkedItems[i])
    : products;

  const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
    product,
    id,
    checked,
    toggleChecked,
  }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => toggleChecked(id)}
        />
        <em style={{ textDecoration: checked ? "line-through" : "none" }}>
          {product}
        </em>{" "}
      </div>
    );
  };

  // functions:

  function changeInputText(e: React.ChangeEvent<HTMLInputElement>) {
    setNewProduct(e.target.value);
  }

  function addProduct() {
    if (newProduct.trim() !== "") {
      setProducts([...products, newProduct]);
      setNewProduct("");
    }
  }

  function toggleHideSelectedBox() {
    setHideSelected((hideSelected) => !hideSelected);
  }

  // aplication:

  return (
    <>
      <div className="screen">
        <section className="day-panel dark">
          <h3 className="shoppingList no-margin ">Shopping list</h3>

          <input
            type="text"
            placeholder="enter a new product..."
            className="custom-input custom-input:focus"
            value={newProduct}
            onChange={changeInputText}
          />

          <button className="shop" onClick={addProduct}>
            +
          </button>

          <div
            className="hide"
            style={{ color: "blanchedalmond", marginTop: "1em" }}
          >
            <input
              type="checkbox"
              value="hide"
              onChange={toggleHideSelectedBox}
            />
            <label>Hide selected</label>
          </div>

          <div className="meal-card list">
            {productItems.map((productItem, index) => (
              <ShoppingListItem
                product={productItem.product}
                id={productItem.id}
                checked={productItem.checked}
                toggleChecked={toggleChecked}
              ></ShoppingListItem>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
