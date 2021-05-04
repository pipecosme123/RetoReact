import React, { Component } from 'react';
import Title from "./Title";
import WeatherInfo from "./WeatherInfo";
import "./weatherCity.css";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "./../Constants/Weathers";

const data = {
    temp: 39,
    humidity: 20,
    wind: 30,
    weatherState: SUN
};

const data2 = {
    temp: 10,
    humidity: 30,
    wind: 50,
    weatherState: WINDY
};

class WeatherCity extends Component {
    
    constructor(){
        super();
        this.state = {
            city : "Cali",
            data : data
        }
    }

    handleClick  = () => {
        console.log("Actualiza!!!!");
        this.setState({
            data: data2
        });
    }

    render() {
        const {city,data} = this.state;
        return (
            <div className="uaoweathercard">
                <Title city={city}></Title>
                <div className="uaoweatherInfo">
                    <WeatherInfo data={data}></WeatherInfo>
                    <button onClick={this.handleClick}>Actualizar</button>
                </div>
            </div>
        );
    }
}

export default WeatherCity;