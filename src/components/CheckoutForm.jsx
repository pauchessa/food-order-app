export default function CheckoutForm() {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Amount: $ </p>
      <div className="control">
        <label>Full Name</label>
        <input />
      </div>
      <div className="control">
        <label>E-Mail Address</label>
        <input />
      </div>
      <div className="control">
        <label>Street</label>
        <input />
      </div>
      <div className="control-row">
        <div className="control">
          <label>Postal Code</label>
          <input />
        </div>
        <div className="control">
          <label>City</label>
          <input />
        </div>
      </div>
    </div>
  );
}
