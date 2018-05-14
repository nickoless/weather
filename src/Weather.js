import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super (props);

    this.state = {
      weather: 'sunny',
      city: undefined,
      temperature: undefined,
    }
  };

  render() {

   let URL = 'api.openweathermap.org/data/2.5/weather?q=London'
   let city = 'Berlin'

   fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      })
      
   

    return(
      <div>
        <h1>City</h1>
        <p>{this.state.weather}</p>
        <button>click me!</button>
      </div>
    )
  };
};

export default Weather;