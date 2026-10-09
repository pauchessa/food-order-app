import { CartContext } from "./../store/CartContext.jsx";
import { use } from "react";

export default function MealCard({ meal }) {
  const { name, price, description, image } = meal;

  const { handleAddMeal } = use(CartContext);

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} />
        <h3>{name}</h3>
        <p className="meal-item-price">${price}</p>
        <p className="meal-item-description">{description}</p>
        <button
          className="button meal-item-actions"
          onClick={() => {
            handleAddMeal(meal);
          }}
        >
          Add to cart
        </button>
      </article>
    </div>
  );
}
