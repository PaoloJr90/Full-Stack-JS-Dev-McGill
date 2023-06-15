import App from "./components/App";
import Modal from "./components/Modal";
import "./container.scss";
import "./button.scss";
import "./modal.scss";
import { useState } from "react";

function Container() {
  const [store, setStore] = useState({
    modalProperty: {
      showModal: false,
      title: "Title Something",
      title1: "Header Something",
    },
    modalText: "Hello World!",
  });

  return (
    <>
      <App store={store} setStore={setStore} />
      <Modal store={store} setStore={setStore} />
    </>
  );
}

export default Container;
