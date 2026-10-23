import { use } from "react";
import { CartContext } from "./../store/CartContext.jsx";
export default function CheckoutForm() {
  const { selectedMeals, calculateTotalPrice } = use(CartContext);
  const totalPrice = calculateTotalPrice(selectedMeals);
  function handleSubmit(formData) {
    const fullName = formData.get("full-name");
    const email = formData.get("email");
    const address = formData.get("address");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");
    console.log(fullName, email);
  }
  return (
    <form id="checkout-form" action={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalPrice} </p>
      <div className="control">
        <label>Full Name</label>
        <input name="full-name" />
      </div>
      <div className="control">
        <label>E-Mail Address</label>
        <input name="email" />
      </div>
      <div className="control">
        <label>Street</label>
        <input name="address" />
      </div>
      <div className="control-row">
        <div className="control">
          <label>Postal Code</label>
          <input name="postal-code" />
        </div>
        <div className="control">
          <label>City</label>
          <input name="city" />
        </div>
      </div>
    </form>
  );
}
