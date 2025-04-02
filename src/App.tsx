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

function App() {
  // variables:
  const [inputProductName, setInputProductName] = useState<string>("");
  const [hideSelected, setHideSelected] = useState<boolean>(false);
  const [productItems, setProductItems] = useState<ShoppingListItem[]>([]);

  const visibleItems = hideSelected
    ? productItems.filter((productItem) => !productItem.checked)
    : productItems;

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
      setProductItems((productItems) => [...productItems, newProductItem]);
      setInputProductName("");
    }
  }

  function toggleHideSelectedBox() {
    setHideSelected((hideSelected) => !hideSelected);
  }

  // application:
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
              checked={hideSelected}
              onChange={toggleHideSelectedBox}
            />
            <label>Hide selected</label>
          </div>

          <div className="meal-card list">
            {visibleItems.map((productItem) => (
              <ShoppingListItem
                key={productItem.id}
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
