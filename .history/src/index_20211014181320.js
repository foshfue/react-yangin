import React from "react";
import ReactDOM from "react-dom";
import Page404 from "./404Page";

import App from "./App";
import Companies from "./Companies";
import Sektorlerimiz from "./Sektorlerimiz";

ReactDOM.render(
  <React.StrictMode>
    {/* <Sektorlerimiz /> */}
    {/* <App /> */}
    {/* <Companies /> */}
    <Page404 />
  </React.StrictMode>,
  document.getElementById("root")
);
