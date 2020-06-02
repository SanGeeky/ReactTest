import React from "react"; // == Create Element
import ReactDOM from "react-dom"; // ApppendChild
import "bootstrap/dist/css/bootstrap.css";
import "./components/global.css";

import BadgePage from "./pages/BadgePage";

const container = document.getElementById("app");

// ReactDOM.render(que,donde)
ReactDOM.render(<BadgePage />, container);
