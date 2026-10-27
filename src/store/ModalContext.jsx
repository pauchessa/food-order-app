import { createContext, useReducer } from "react";

export const ModalContext = createContext({
  isOpen: false,
  handleOpenModal() {},
  handleCloseModal() {},
  content: "cart",
  setModalContent() {},
});

function ModalReducer(state, action) {
  if (action.type === "open") {
    return { ...state, isOpen: true };
  }

  if (action.type === "close") {
    return { ...state, isOpen: false };
  }

  if (action.type === "setContent") {
    return { ...state, content: action.payload };
  }

  return state;
}

export function ModalContextProvider({ children }) {
  const [modalState, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
    content: "cart",
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

  function setModalContent(content) {
    dispatch({
      type: "setContent",
      payload: content,
    });
  }

  const ctxValues = {
    isOpen: modalState.isOpen,
    handleOpenModal,
    handleCloseModal,
    content: modalState.content,
    setModalContent,
  };

  return <ModalContext value={ctxValues}>{children}</ModalContext>;
}
