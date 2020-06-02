// const element = document.createElement("h1");
// element.innerText = "Hello, Platzi Badges";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react"; // == Create Element
import ReactDOM from "react-dom"; // ApppendChild

//const jsx = <h1>Hello, Platzi Badges from React</h1>;
/* const element = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "Ir a Platzi."
); */

// const name = "Santiago Sixi";
// const sum = () => 3 + 3;
// const element = React.createElement("h1", {}, `Hola, soy ${name}`);

const jsx = (
  <div>
    <h1>Hola, Soy Santiago</h1>
    <p>Soy Estudiante de Ingenieria</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola Soy Santiago"),
  React.createElement("p", {}, "Soy ! Estudiante de Ingenieria")
);

const container = document.getElementById("app");

// ReactDOM.render(que,donde)
ReactDOM.render(element, container);
