import React from "react";
import ReactDOM from "react-dom";
import Page404 from "./404Page";

import App from "./App";
import Companies from "./Companies";
import ContactUsPage from "./ContactUsPage";
import ContactUs from "./pages/ContactUs";
import Sektor from "./Sektor";
import Sektorlerimiz from "./Sektorlerimiz";

ReactDOM.render(
  <React.StrictMode>
    {/* <Sektorlerimiz /> */}
    {/* <App /> */}
    {/* <Companies /> */}
    {/* <Page404 /> */}
    <Sektor />
    {/* <ContactUsPage /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
