import React from "react";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

class BadgePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstname="Santiago"
                lastname="Pinchao"
                twitter="SanGeeky"
                avatar="https://www.gravatar.com/avatar/ae0b876156856ac9e18841a51b8fb62b"
                jobtitle="Student Duro"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgePage;
