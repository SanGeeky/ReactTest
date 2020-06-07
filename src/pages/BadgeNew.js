import React from "react";

import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (evento) => {
    /* //guardar copia del estado actual para añadir a form
    const nextForm = this.state.form;
    // se asigna nextForm a ---- form: nextForm,
    nextForm[evento.target.name] = evento.target.value;
    */

    this.setState({
      form: {
        // ... Deja Caer todos los valores que tenia form y se añade el nuevo.
        ...this.state.form,
        [evento.target.name]: evento.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstname={this.state.form.firstName || "FIRTS_NAME"}
                lastname={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                avatar="https://www.gravatar.com/avatar/ae0b876156856ac9e18841a51b8fb62b"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
