import { createContext, useReducer } from "react";

export const CartContext = createContext({
  selectedMeals: [],
  handleAddMeal() {},
  handleDeleteMeal() {},
  handleIncreaseQuantity() {},
  handleDecreaseQuantity() {},
});

function cartReducer(state, action) {
  if (action.type === "add") {
    let newMeal = undefined;
    if (!state.selectedMeals.some((meal) => meal.id === action.payload.id)) {
      newMeal = { ...action.payload, quantity: 1 };
      console.log("meal.quantity: 1", newMeal);
      return { selectedMeals: [...state.selectedMeals, { ...newMeal }] };
    } else {
      const newSelectedMeals = state.selectedMeals.map((meal) => {
        if (meal.id === action.payload.id) {
          newMeal = { ...action.payload, quantity: meal.quantity + 1 };
          return newMeal;
        }
      });
      return { selectedMeals: [...newSelectedMeals] };
    }
  }

  if (action.type === "delete") {
  }

  if (action.type == "increase") {
  }

  if (action.type === "decrease") {
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

  function handleDeleteMeal(id) {
    dispatch({
      type: "delete",
      payload: id,
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

  const ctxValues = {
    selectedMeals: cartState.selectedMeals,
    handleAddMeal,
    handleDeleteMeal,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };
  return <CartContext value={ctxValues}>{children}</CartContext>;
}
