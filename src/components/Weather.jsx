import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.city && (
          <p className="badge badge-warning">
            The current weather details for {this.props.city} is:{" "}
          </p>
        )}

        {this.props.city &&
          this.props.country && (
            <h3 className="weather__key">
              Location:{" "}
              <span className="weather__value">
                {this.props.city},{this.props.country}
              </span>
            </h3>
          )}

        {this.props.temperature && (
          <h3 className="weather__key">
            Temperature:{" "}
            <span className="weather__value">{this.props.temperature}</span>
          </h3>
        )}
        {this.props.humidity && (
          <h3 className="weather__key">
            Humidity:{" "}
            <span className="weather__value">{this.props.humidity}</span>
          </h3>
        )}
        {this.props.condition && (
          <h3 className="weather__key">
            Condition:{" "}
            <span className="weather__value">{this.props.condition}</span>
          </h3>
        )}
        {this.props.error && (
          <p className="alert-danger mb-2">
            Error: <span>{this.props.error}</span>
          </p>
        )}
      </div>
    );
  }
}

export default Weather;
