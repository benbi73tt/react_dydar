import './App.css';
import React, { Component } from 'react'
import Info from "./Components/info";
import Form from './Components/form';
import Weather from './Components/weather';


const API_key='9d870569464d9a70bff3ca587f3f21bb';

export default class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,//Давление
    sunset: undefined,
    error: undefined

  }

  gettingWeather = async(event) => {//async чтобы всё работало ассинхронно(без перезагрузки)
     event.preventDefault();
     var city = event.target.elements.city.value;

     if(city){
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
      const data = await api_url.json();
      console.log(data);


      var sunset = data.sys.sunset;
      var date=new Date();
      date.setTime(sunset); // какую дату отслеживаем
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,//Давление
        sunset: sunset_date,
        error:undefined,
      });
     }
     else{
       
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,//Давление
        sunset: undefined,
        error: "Введите название города!"
      });
      }

  }
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
              <Info/>
              </div>
              <div className="col-sm-7 form">
              <Form WeatherMethod={this.gettingWeather}/>
          <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
          />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

