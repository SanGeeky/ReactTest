import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

import BadgesItems from "../components/BadgesItems";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";

class BadgesList extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    // En caso de volver a inicializar los datos
    // dejamos estos valores por defecto
    this.setState({ loading: true, error: null });

    // Es una funcion asincrona que que espera que haga la solicitud
    // se usa await que inicia pero no se sabe cuando termina
    // una vez termine sigue la ejecu

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      //return `Error: ${this.state.error.message}`;
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <BadgesItems badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesList;
