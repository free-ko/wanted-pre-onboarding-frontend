import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Global } from "@emotion/react";

import { globalStyle } from "./styles";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Global styles={globalStyle} />
      <App />
    </Router>
  </React.StrictMode>
);
