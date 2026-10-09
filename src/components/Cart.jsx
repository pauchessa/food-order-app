import { CartContext } from "./../store/CartContext.jsx";
import { use } from "react";
export default function Cart() {
  const { selectedMeals } = use(CartContext);

  const cart = selectedMeals.length ? (
    selectedMeals.map((meal) => (
      <li key={meal.id} className="cart-item">
        <p>{meal.name}</p>
        <div className="cart-item-actions">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </li>
    ))
  ) : (
    <p>Your cart is empty</p>
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>{cart}</ul>
      <p className="cart-total"></p>
    </div>
  );
}
