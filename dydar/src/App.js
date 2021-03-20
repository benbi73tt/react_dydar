import './App.css';
import React, { Component } from 'react'
import Info from "./Components/info";
import Form from './Components/form';
import Weather from './Components/weather';


const API_key='9d870569464d9a70bff3ca587f3f21bb';

export default class App extends Component {

  gettingWeather = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
     event.preventDefault();
     const city=event.target.elements.city.value;
     const api_url = await 
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
     const data = await api_url.json();
     console.log(data);
  }
  render() {
    return (
      <div>
        <Info/>
        <Form WeatherMethod={this.gettingWeather}/>
        <Weather/>
      </div>
    )
  }
}

