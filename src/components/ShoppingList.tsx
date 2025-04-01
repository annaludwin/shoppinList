// exported component:
export const ShoppingList = () => {
  return (
    <div className="screen">
      <section className="day-panel dark">
        <h3 className="shoppingList no-margin ">Lista zakupów</h3>
        <input
          type="text"
          placeholder="Dodaj produkt"
          className="custom-input custom-input:focus"
        />
        <button className="shop">Dodaj produkt</button>

        <div
          className="hide"
          style={{ color: "blanchedalmond", marginTop: "1em" }}
        >
          <input type="checkbox" value="hide" />
          <label>ukryj zaznaczone</label>
        </div>

        <div className="meal-card list">
          <ShoppingListItem product={"Produkt 1"}></ShoppingListItem>
          <ShoppingListItem product={"Produkt 2"}></ShoppingListItem>
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
