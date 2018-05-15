import React, { Component } from 'react';


class Weather extends Component {
  constructor(props) {
    super (props);

    this.state = {
      city: null,
      temperature: null,
      weather: null,
      measurement: 'Celsius'
    };
  }
 
  measurementHandler = () => {
    this.state.measurement === 'Celsius' ? 
    this.setState({measurement: 'Fahrenheit'}) : 
    this.setState({measurement: 'Celsius'})
  };

  componentDidMount() {
    let apiKey = '643661576b7df360bb874c779f2389c8'
    let city = 'Berlin'
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&APPID=${apiKey}`

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.setState({
          weather: result.list[0].weather[0].main,
          temperature: `${Math.round(result.list[0].main.temp - 273.15)}°`,
          city: result.city.name
        })
      })
      .catch((error) => {
        console.error(error);
      })

    // if (this.state.measurement === 'Fahrenheit') {
    //   this.setState({temperature * 2})
    // }
  }

  render() {

 

    return(
      <div>
        <h1>{this.state.city}</h1>
        <p>{this.state.weather}</p>
        <p>{this.state.temperature}</p>
        <p>{this.state.measurement}</p>
        <button onClick={this.measurementHandler}>click me!</button>
      </div>
    )
  };
};

export default Weather;