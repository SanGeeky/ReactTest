import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    // const firstname = "Santiago";
    // const lastname = "David";
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conf"></img>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatar} alt="Avatar" />
          <h1>
            {this.props.firstname} <br /> {this.props.lastname}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

// Debemos exportar nuestro Componente
export default Badge;
