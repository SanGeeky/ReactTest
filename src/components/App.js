import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layaout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import BadgesList from "../pages/BadgesList";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/badges" component={BadgesList} />
      <Route exact path="/badges/new" component={BadgeNew} />
    </BrowserRouter>
  );
}

export default App;
