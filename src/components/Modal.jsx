import { use, useRef, useEffect } from "react";
import Cart from "../components/Cart.jsx";
import { ModalContext } from "../store/ModalContext.jsx";

export default function Modal({ meals }) {
  const dialog = useRef();
  const { isOpen, handleCloseModal } = use(ModalContext);

  useEffect(() => {
    if (isOpen) dialog.current.showModal();
    if (!isOpen) dialog.current.close();
  }, [isOpen]);
  return (
    <dialog ref={dialog} onCancel={handleCloseModal} className="modal">
      <Cart meals={meals} />
      <div className="modal-actions">
        <button className="text-button" onClick={handleCloseModal}>
          Close
        </button>
        <button className="button">Go to checkout</button>
      </div>
    </dialog>
  );
}
