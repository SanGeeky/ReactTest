import React from "react";

import "./styles/404.css";
import logo404 from "../images/404.png";

function NotFound() {
  return (
    <div className="notfound">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col align-self-center">
            <h1 className="display-1">Error 404:</h1> <br />
            <span className="display-3">Page Not Found</span>
          </div>
          <div className="col align-self-center">
            <img
              className="img-fluid"
              src={logo404}
              height="500"
              width="500"
              alt="Not Found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
