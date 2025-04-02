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

  const [inputProductName, setInputProductName] = useState<string>("");
  const [hideSelected, setHideSelected] = useState<boolean>(false);
  const [productItems, setProductItems] = useState<ShoppingListItem[]>([
    { product: "kawa", id: 123, checked: true },
    { product: "mleko", id: 456, checked: false },
  ]);

  const visibleItems = hideSelected
    ? productItems.filter((productItem, index) => !productItem.checked)
    : productItems;

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
    setInputProductName(e.target.value);
  }

  function toggleChecked(id: number): void {
    setProductItems((productItems) => {
      const newItem: ShoppingListItem[] = productItems.map(
        (item: ShoppingListItem) => {
          if (item.id === id) {
            return { ...item, checked: !item.checked };
          } else {
            return item;
          }
        },
      );
      return newItem;
    });
  }

  function addProduct() {
    if (inputProductName.trim() !== "") {
      const newProductItem = {
        product: inputProductName,
        id: Date(),
        checked: false,
      };
      setProductItems([...productItems, newProductItem]);
      setInputProductName("");
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
            value={inputProductName}
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
            {visibleItems.map((productItem, index) => (
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
