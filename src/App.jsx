import Header from "../src/components/Header.jsx";
import Meals from "../src/components/Meals.jsx";
import Modal from "./components/Modal.jsx";
import { ModalContextProvider } from "./store/ModalContext.jsx";

function App() {
  return (
    <ModalContextProvider>
      <Header />
      <Modal />
      <Meals />
    </ModalContextProvider>
  );
}

export default App;
