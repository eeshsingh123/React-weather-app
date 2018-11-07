import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title.jsx";
import Form from "./components/Form.jsx";
import Weather from "./components/Weather.jsx";

const API_KEY = "0f46310a054a8b84c27a5b0bf8c76e91";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    condition: undefined,
    error: undefined
  };

  handleWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    // console.log(data);
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        condition: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        condition: undefined,
        error: "Please enter a City and a Country name!"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 title-container">
                  <Title />
                </div>
                <div className="col-sm-6 form-container">
                  <Form getWeather={this.handleWeather} />
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    condition={this.state.condition}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
