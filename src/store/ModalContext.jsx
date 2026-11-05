import { createContext, useReducer } from "react";

export const ModalContext = createContext({
  isOpen: false,
  handleOpenModal() {},
  handleCloseModal() {},
  content: "cart",
  setModalContent() {},
  message: null,
});

function ModalReducer(state, action) {
  if (action.type === "open") {
    return { ...state, isOpen: true };
  }

  if (action.type === "close") {
    return { ...state, isOpen: false };
  }

  if (action.type === "setContent") {
    return { ...state, content: action.payload, message: action.message };
  }

  return state;
}

export function ModalContextProvider({ children }) {
  const [modalState, dispatch] = useReducer(ModalReducer, {
    isOpen: false,
    content: "cart",
    message: null,
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

  function setModalContent(content, errorMessage = null) {
    dispatch({
      type: "setContent",
      payload: content,
      message: errorMessage,
    });
  }

  const ctxValues = {
    isOpen: modalState.isOpen,
    handleOpenModal,
    handleCloseModal,
    content: modalState.content,
    setModalContent,
    message: modalState.message,
  };

  return <ModalContext value={ctxValues}>{children}</ModalContext>;
}
