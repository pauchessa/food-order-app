import { createContext, useReducer } from "react";

export const CartContext = createContext({
  selectedMeals: [],
  handleAddMeal() {},
  handleDeleteMeal() {},
});

function cartReducer(state, action) {
  if (action.type === "add") {
    return { selectedMeals: [...state.selectedMeals, action.payload] };
  }

  if (action.type === "delete") {
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

  const ctxValues = {
    selectedMeals: cartState.selectedMeals,
    handleAddMeal,
    handleDeleteMeal,
  };
  return <CartContext value={ctxValues}>{children}</CartContext>;
}
