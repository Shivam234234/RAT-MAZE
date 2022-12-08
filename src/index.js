import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";
import App from "./App";

import { DataProvider } from "./js/component/context/data-contex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
