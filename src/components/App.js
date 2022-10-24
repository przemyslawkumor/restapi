import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

// Klucz do API
const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5'

class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  }


  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }




  handleCitySubmit = (e) => {
    e.preventDefault()

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: this.state.value,
        })
      })
      .catch(err => {
        this.setState(state => ({
          err: true,
          city: state.value,
        }));
      })
  }


  // componentDidUpdate(prevProps, prevState) {

    

  //   if (prevState.value !== this.state.value) {
  //     const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

  //     fetch(API)
  //       .then(response => {
  //         if (response.ok) {
  //           return response
  //         }
  //         throw Error("Nie udało się")
  //       })
  //       .then(response => response.json())
  //       .then(data => {
  //         const time = new Date().toLocaleString()
  //         this.setState({
  //           err: false,
  //           date: time,
  //           sunrise: data.sys.sunrise,
  //           sunset: data.sys.sunset,
  //           temp: data.main.temp,
  //           pressure: data.main.pressure,
  //           wind: data.wind.speed,
  //           city: this.state.value,
  //         })
  //       })
  //       .catch(err => {
  //         this.setState(state => ({
  //           err: true,
  //           city: state.value,
  //         }));
  //       })
  //   }


  // }


  render() {

    return (
      <div className='App'>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit} 
        />
       
        <Result weather={this.state} />
      </div>
    )
  }
}
export default App;
