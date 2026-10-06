import Cart from "../components/Cart.jsx";

export default function Modal() {
  return (
    <dialog className="modal">
      <Cart />
      <div className="modal-actions">
        <button className="text-button">Close</button>
        <button className="button">Go to checkout</button>
      </div>
    </dialog>
  );
}
