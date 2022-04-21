import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";

ReactDOM.render(
  <React.StrictMode>
    <LightgalleryProvider>
      <App />
    </LightgalleryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
