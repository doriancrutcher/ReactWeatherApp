import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Container/Input/Input'
import DataField from './Container/DataField/DataField'
import Header from './Component/Header/Header';

class App extends Component {
  constructor(props){
          super(props)
          this.state={
              weatherTemp:'--',
              location:'--',
              condition:'Clear'
          }
      
  }

  WeSearch=(textIn)=>{
    let City=textIn
    let FullApi=`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=f6760ba909cd12408a11186c3c81c69d`
    fetch(FullApi)
    .then(res=>res.json())
    .then(result=>{console.log(result.weather);this.setState({
      weatherTemp:Math.floor(9/5*(result.main.temp-273)+32),
      location:City,
      condition:result.weather[0].main
      }
    )})
    .catch(error=>{

      this.setState({
        weatherTemp:'--',
        location:'--',
        condition:'World'
      })
      return Promise.reject()
    }
    )

    
  }

  componentDidUpdate(){
    console.log(this.state.weatherTemp)
  }



  render(){
    
  return (
    <div className={"BackDrop"+' '+this.state.condition}>
    <div className="App">
      <Header/>
      <Input WeSearch={this.WeSearch}/>
      <div class="DataBlock">
      <DataField Temperature={this.state.weatherTemp} Location={this.state.location}/>
      </div>
      
    </div>
    </div>
  );
  }
}

export default App;
