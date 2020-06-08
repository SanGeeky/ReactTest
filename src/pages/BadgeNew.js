import React from "react";
import md5 from "md5";

import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl: "",
    },
  };

  GetavatarUrl = (email) => {
    const hash = md5(email);
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
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
        avatarUrl: this.GetavatarUrl(this.state.form.email),
      },
    });
  };

  handleSubmit = async (evento) => {
    evento.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  com;
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

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
                email={this.state.form.email || "EMAIL"}
                avatarUrl={this.state.form.avatarUrl}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>

              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
