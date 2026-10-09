import Header from "../src/components/Header.jsx";
import Meals from "../src/components/Meals.jsx";
import Modal from "./components/Modal.jsx";
import { ModalContextProvider } from "./store/ModalContext.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";

function App() {
  return (
    <>
      <ModalContextProvider>
        <CartContextProvider>
          <Header />
          <Modal />
          <Meals />
        </CartContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
