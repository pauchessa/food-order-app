import { createContext, useReducer } from "react";

export const ModalContext = createContext({
  isOpen: false,
  handleOpenModal() {},
  handleCloseModal() {},
});

function ModalReducer(state, action) {
  if (action.type === "open") {
    return { isOpen: true };
  }

  if (action.type === "close") {
    return { isOpen: false };
  }
  return state;
}

export function ModalContextProvider({ children }) {
  const [modalState, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
  });
  function handleOpenModal() {
    dispatch({
      type: "open",
    });
  }

  function handleCloseModal() {
    dispatch({
      type: "close",
    });
  }

  const ctxValues = {
    isOpen: modalState.isOpen,
    handleOpenModal,
    handleCloseModal,
  };
  return <ModalContext value={ctxValues}>{children}</ModalContext>;
}
