import React from "react"; // == Create Element
import ReactDOM from "react-dom"; // ApppendChild
import "bootstrap/dist/css/bootstrap.css";
import "./components/global.css";

import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render(que,donde)
ReactDOM.render(
  <Badge
    firstname="Julian"
    lastname="Vallejo"
    avatar="https://www.gravatar.com/avatar/ae0b876156856ac9e18841a51b8fb62b"
    jobTitle="Fisico Duro"
    twitter="pinpacho"
  />,
  container
);
