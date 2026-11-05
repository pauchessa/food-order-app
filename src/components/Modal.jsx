import { use, useRef, useEffect } from "react";
import Cart from "../components/Cart.jsx";
import CheckoutForm from "./CheckoutForm.jsx";
import { ModalContext } from "../store/ModalContext.jsx";
import { CartContext } from "./../store/CartContext.jsx";

export default function Modal() {
  const dialog = useRef();
  const { isOpen, handleCloseModal, content, setModalContent, message } =
    use(ModalContext);
  const { clearCart } = use(CartContext);

  useEffect(() => {
    if (isOpen) dialog.current.showModal();
    if (!isOpen) dialog.current.close();
  }, [isOpen]);
  return (
    <dialog ref={dialog} onCancel={handleCloseModal} className="modal">
      {content === "cart" && <Cart />}
      {content === "checkout" && <CheckoutForm />}
      {content === "success" && (
        <div>
          <h2>Success!</h2>
          <p>Your order was submitted successfully.</p>
        </div>
      )}
      {content === "error" && (
        <div>
          <h2>Unable to place your order</h2>
          <p>{message} Please try again.</p>
        </div>
      )}
      <div className="modal-actions">
        {(content === "cart" || content === "checkout") && (
          <button
            className="text-button"
            onClick={() => {
              handleCloseModal();
              setModalContent("cart");
            }}
          >
            Close
          </button>
        )}
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
        {content === "success" && (
          <button
            className="button"
            onClick={() => {
              handleCloseModal();
              clearCart();
              setModalContent("cart");
            }}
          >
            Close
          </button>
        )}
        {content === "error" && (
          <>
            <button
              className="text-button"
              onClick={() => {
                setModalContent("cart");
              }}
            >
              Back to cart
            </button>
            <button
              className="button"
              onClick={() => {
                handleCloseModal();
                setModalContent("checkout");
              }}
            >
              Close
            </button>
          </>
        )}
      </div>
    </dialog>
  );
}
