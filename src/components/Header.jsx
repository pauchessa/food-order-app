import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="reactfood logo"></img>
        <h1>Reactfood</h1>
      </div>
      <button className="text-button">Cart</button>
    </div>
  );
}
