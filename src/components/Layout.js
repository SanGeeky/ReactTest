import React from "react";

import Navbar from "../components/Navbar";

function Layaout(props) {
  //const children = props.children;
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layaout;
