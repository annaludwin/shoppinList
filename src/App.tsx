import "./reset.css";
import "./styles.css";
import { useState } from "react";
import { ShoppingList } from "./components/ShoppingList";

function App() {
  return (
    <>
      <nav>
        <h1>🔔BeL</h1>
      </nav>
      <ShoppingList />
    </>
  );
}

export default App;
