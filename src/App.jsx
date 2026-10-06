import Header from "../src/components/Header.jsx";
import Meals from "../src/components/Meals.jsx";
import Modal from "./components/Modal.jsx";
import { ContextProvider } from "./store/Context.jsx";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Modal />
      <Meals />
    </ContextProvider>
  );
}

export default App;
