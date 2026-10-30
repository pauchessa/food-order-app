import { use } from "react";
import { CartContext } from "./../store/CartContext.jsx";
export default function CheckoutForm() {
  const { selectedMeals, calculateTotalPrice } = use(CartContext);
  const totalPrice = calculateTotalPrice(selectedMeals);
  async function handleSubmit(formData) {
    const name = formData.get("full-name");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");
    const customer = {
      name,
      email,
      street,
      "postal-code": postalCode,
      city,
    };
    const orderData = { order: { customer, items: selectedMeals } };

    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message);
    }
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
        <input name="street" />
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
