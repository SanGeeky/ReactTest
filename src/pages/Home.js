import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";
import logoConf from "../images/platziconf-logo.svg";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="logoConf col">
            <img className="img-fluid" src={logoConf} alt="Not Found" />
            <span
              style={{
                textAlign: "left",
                margin: "1rem",
              }}
            >
              <h2>Print your Badges</h2>
              <span>The easiest way to manage your conference</span>
            </span>
            <Link className="btn btn-primary" to="/badges">
              Start Now
            </Link>
          </div>
          <div className="astronauts">
            <img className="img-fluid" src={astronauts} alt="astronauts" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
