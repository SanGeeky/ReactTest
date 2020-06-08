import React from "react";

class BadgeForm extends React.Component {
  //inicializamos el state
  // this.state.name = obtenemos el state Para ese name
  //state = {};

  //   handleChange = (evento) => {
  //     //Ahora estamos obteniedo el valor
  //     /* console.log({
  //       name: evento.target.name,
  //       value: evento.target.value,
  //       type: evento.target.type,
  //       className: evento.target.className,
  //     }); */

  //     //llave valor
  //     //firstName: evento.target.value,
  //     this.setState({
  //       [evento.target.name]: evento.target.value,
  //     });
  //   };

  handleClick = (evento) => {
    console.log("Button was Clicked");
  };

  // handleSubmit = (evento) => {
  //   evento.preventDefault();
  //   console.log("Form was Submmited");
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
