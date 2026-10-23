import { createContext, useReducer } from "react";

export const CartContext = createContext({
  selectedMeals: [],
  handleAddMeal() {},
  handleIncreaseQuantity() {},
  handleDecreaseQuantity() {},
  calculateTotalPrice() {},
});

function cartReducer(state, action) {
  if (action.type === "add") {
    let newMeal = undefined;
    if (!state.selectedMeals.some((meal) => meal.id === action.payload.id)) {
      newMeal = { ...action.payload, quantity: 1 };
      return { selectedMeals: [...state.selectedMeals, newMeal] };
    } else {
      const newSelectedMeals = state.selectedMeals.map((meal) => {
        if (meal.id === action.payload.id) {
          newMeal = { ...action.payload, quantity: meal.quantity + 1 };
          return newMeal;
        } else return meal;
      });
      return { selectedMeals: [...newSelectedMeals] };
    }
  }

  if (action.type === "increase") {
    const newSelectedMeals = state.selectedMeals.map((meal) => {
      if (meal.id === action.payload) {
        const newMeal = { ...meal, quantity: meal.quantity + 1 };
        return newMeal;
      } else return meal;
    });
    return { selectedMeals: [...newSelectedMeals] };
  }

  if (action.type === "decrease") {
    const newSelectedMeals = state.selectedMeals.map((meal) => {
      if (meal.id === action.payload) {
        const newMeal = { ...meal, quantity: meal.quantity - 1 };
        return newMeal;
      } else return meal;
    });
    const filteredSelectedMeals = newSelectedMeals.filter(
      (meal) => meal.quantity > 0,
    );
    return { selectedMeals: [...filteredSelectedMeals] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { selectedMeals: [] });

  function handleAddMeal(meal) {
    dispatch({
      type: "add",
      payload: meal,
    });
  }

  function handleIncreaseQuantity(id) {
    dispatch({
      type: "increase",
      payload: id,
    });
  }

  function handleDecreaseQuantity(id) {
    dispatch({
      type: "decrease",
      payload: id,
    });
  }

  function calculateTotalPrice(selectedMeals) {
    const totalPrice = selectedMeals.reduce(
      (totalSum, currentMeal) =>
        totalSum + +currentMeal.price * currentMeal.quantity,
      0,
    );
    return totalPrice;
  }

  const ctxValues = {
    selectedMeals: cartState.selectedMeals,
    handleAddMeal,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    calculateTotalPrice,
  };
  return <CartContext value={ctxValues}>{children}</CartContext>;
}
