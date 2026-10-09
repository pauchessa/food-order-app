import logo from "../assets/logo.jpg";
import { use } from "react";
import { ModalContext } from "../store/ModalContext.jsx";
import { CartContext } from "./../store/CartContext.jsx";
export default function Header() {
  const { handleOpenModal } = use(ModalContext);
  const { selectedMeals } = use(CartContext);

  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="reactfood logo"></img>
        <h1>Reactfood</h1>
      </div>
      <button className="text-button" onClick={handleOpenModal}>
        {`Cart (${selectedMeals.length})`}
      </button>
    </div>
  );
}
