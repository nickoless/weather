import React, { Component } from 'react';


class Weather extends Component {
  constructor(props) {
    super (props);

    this.state = {
      weather: 'Sunny',
      city: 'Berlin',
      temperature: 26,
      measurement: 'Celsius'
    };
  }
 
  measurementHandler = () => {
    this.state.measurement ? 'Celsius' : 'Fahrenheit'
  }

  componentDidMount() {
    let apiKey = '643661576b7df360bb874c779f2389c8'
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=London&id=524901&APPID=${apiKey}`
    let city = 'Berlin'

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState ({
          city: responseJson.city.name
        })
        console.log('test')
        console.log(responseJson.city.name)
      })
      .catch((error) => {
        console.error(error);
      })
    
    let WeatherIcon   
    if (this.state.measurement === 'Fahrenheit') {
      this.state.temperature * 1.8 + 32  
    }
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