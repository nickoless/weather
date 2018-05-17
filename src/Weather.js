import React, { Component } from 'react';
import './App.css';

class Weather extends Component {
  constructor(props) {
    super (props);
    this.state = {
      city: null,
      temperature: null,
      weather: null,
      measurement: 'Celsius'
    };
  };
 
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
    let weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&id=524901&APPID=${apiKey}`
    
    fetch(weatherURL)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.setState({
          weather: result.list[0].weather[0].main,
          temperature: Math.round(result.list[0].main.temp),
          city: result.city.name,
          country: result.city.country
        });
      })
      .catch((error) => {
        console.error(error);
      })
  };

  render() {
    
    let icon = null;
    let weather = this.state.weather
    
    if (weather === 'Clouds') { 
      icon = 'wi wi-cloud'
    }
    if (weather === 'Clear') {
      icon = 'wi wi-day-sunny'
    } 
    if (weather === 'Rain') {
      icon = 'wi wi-rain' 
    }
      
    return(
      <div className='container'>
        <p className='city'>{this.state.city} <span className='country'>{this.state.country}</span></p>
        <i className={icon}></i>
        <div className='weather'>{this.state.weather}</div><hr/>
        <div class="row">

        <div class="col-xs-6">
          {this.state.temperature}° {this.state.measurement}
          <button type='button' className='btn btn-outline-primary' onClick={this.measurementHandler}>UNITS</button>

        </div>
        <div class="col-xs-6">
          Other shit
        </div>

</div>

      </div>
    )
  };
};

export default Weather;