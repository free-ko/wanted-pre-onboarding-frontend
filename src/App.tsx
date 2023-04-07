import { Global } from "@emotion/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Router } from "src/router";
import { globalStyle } from "src/styles";

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Router />
      <ToastContainer />
    </>
  );
};

export default App;
