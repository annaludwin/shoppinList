import "./reset.css";
import "./styles.css";
import { useState } from "react";
import { ShoppingList } from "./components/ShoppingList";

function App() {
  // variables:

  const [products, setProducts] = useState(["chleb", "sól", "wódka"]);
  const [newProduct, setNewProduct] = useState("");

  const ShoppingListItem = ({ product }) => {
    return (
      <div>
        <input type="checkbox" />
        <em>{product}</em>
      </div>
    );
  };

  // functions:

  function changeInputText(e) {
    setNewProduct(e.target.value);
  }

  function addProduct() {
    setProducts([...products, newProduct]);
    setNewProduct("");
  }

  function crossProduct() {}

  function hideSelected() {}

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
            <input type="checkbox" value="hide" />
            <label>Hide selected</label>
          </div>

          <div className="meal-card list">
            {products.map((product, index) => (
              <ShoppingListItem
                product={product}
                key={index}
              ></ShoppingListItem>
            ))}
          </div>
          {console.log(newProduct)}
        </section>
      </div>
    </>
  );
}

export default App;
