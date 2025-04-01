// exported component:
export const ShoppingList = () => {
  return (
    <div className="screen">
      <section className="day-panel dark">
        <h3 className="shoppingList no-margin ">Shopping list</h3>
        <input
          type="text"
          placeholder="Dodaj produkt"
          className="custom-input custom-input:focus"
        />
        <button className="shop">Add new product</button>

        <div
          className="hide"
          style={{ color: "blanchedalmond", marginTop: "1em" }}
        >
          <input type="checkbox" value="hide" />
          <label>Hide selected</label>
        </div>

        <div className="meal-card list">
          <ShoppingListItem product={"Product 1"}></ShoppingListItem>
          <ShoppingListItem product={"Product 2"}></ShoppingListItem>
          <ShoppingListItem product={"..."}></ShoppingListItem>
        </div>
      </section>
    </div>
  );
};

// utils:

const ShoppingListItem = ({ product }) => {
  return (
    <div>
      <input type="checkbox" />
      <em>{product}</em>
    </div>
  );
};
