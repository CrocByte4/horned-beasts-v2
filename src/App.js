import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "../data.json";
import { useState } from "react";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [modalShow, setModalShow] = useState(false);

  function handleModal() {
    setModalShow(!modalShow);
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} />
      {modalShow && <SelectedBeast />}
      <Footer />
    </div>
  );
}

export default App;
