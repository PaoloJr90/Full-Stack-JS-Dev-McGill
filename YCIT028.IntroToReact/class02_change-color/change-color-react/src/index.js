import React from "react";
import ReactDOM from "react-dom/client";
import AppClass from "./AppClass";
import AppFunction from "./AppFunction";
import AppFooter from "./AppFooter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppClass />
    <AppFooter />
  </>
);
