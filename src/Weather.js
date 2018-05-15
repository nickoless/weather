import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super (props);

    this.state = {
      city: null,
      temperature: null,
      weather: null,
      icon: null,
      measurement: 'Celsius'
    };
  }
 
  measurementHandler = () => {
    const imperial = Math.round(this.state.temperature * 1.8 + 32)
    const metric = Math.round((this.state.temperature - 32) / 1.8) 
    this.state.measurement === 'Celsius' ? 
    this.setState({measurement: 'Fahrenheit', temperature: imperial}) : 
    this.setState({measurement: 'Celsius', temperature: metric})
  };

  componentDidMount() {
    let apiKey = '643661576b7df360bb874c779f2389c8'
    let city = 'Berlin'
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&id=524901&APPID=${apiKey}`

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.setState({
          weather: result.list[0].weather[0].main,
          temperature: Math.round(result.list[0].main.temp),
          city: result.city.name
        })
      })
      .catch((error) => {
        console.error(error);
      })
    
  }

  render() {    

  

    return(
      <div>
        <h1>{this.state.city}</h1>
        <p>{this.state.weather}<i className="wi wi-night-sleet"></i></p>
        <p>{this.state.temperature}</p>
        <p>{this.state.measurement}</p>
        <button onClick={this.measurementHandler}>click me!</button>
      </div>
    )
  };
};

export default Weather;