import Header from "../src/components/Header.jsx";
import Meals from "../src/components/Meals.jsx";
import Modal from "./components/Modal.jsx";
import { ModalContextProvider } from "./store/ModalContext.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  return (
    <>
      <ModalContextProvider>
        <CartContextProvider meals={meals}>
          <Header />
          <Modal />
          <Meals meals={meals} setMeals={setMeals} />
        </CartContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
