import { use, useRef, useEffect } from "react";
import Cart from "../components/Cart.jsx";
import CheckoutForm from "./CheckoutForm.jsx";
import { ModalContext } from "../store/ModalContext.jsx";

export default function Modal() {
  const dialog = useRef();
  const { isOpen, handleCloseModal, content, setModalContent } =
    use(ModalContext);

  useEffect(() => {
    if (isOpen) dialog.current.showModal();
    if (!isOpen) dialog.current.close();
  }, [isOpen]);
  return (
    <dialog ref={dialog} onCancel={handleCloseModal} className="modal">
      {content === "cart" && <Cart />}
      {content === "checkout" && <CheckoutForm />}
      <div className="modal-actions">
        <button
          className="text-button"
          onClick={() => {
            handleCloseModal();
            setModalContent("cart");
          }}
        >
          Close
        </button>
        {content === "cart" && (
          <button
            className="button"
            onClick={() => setModalContent("checkout")}
          >
            Go to checkout
          </button>
        )}
        {content === "checkout" && (
          <button className="button" form="checkout-form">
            Submit form
          </button>
        )}
      </div>
    </dialog>
  );
}
