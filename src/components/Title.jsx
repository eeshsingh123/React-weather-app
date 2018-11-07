import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">
            Weather App using React.js!
          </span>
          <small className="text-muted">Find Temperature data and more</small>
        </nav>
      </React.Fragment>
    );
  }
}

export default Title;
