import React from "react";
import md5 from "md5";

import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (evento) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt=""
          />
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
              <h1>Edit Attendant</h1>

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

export default BadgeEdit;
