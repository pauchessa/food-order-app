export default function Cart() {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        <li className="cart-item">
          <p>First meal</p>
          <div className="cart-item-actions">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </li>
        <li className="cart-item">
          <p>Second meal</p>
          <div className="cart-item-actions">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </li>
      </ul>
      <p className="cart-total"> 100$ </p>
    </div>
  );
}
