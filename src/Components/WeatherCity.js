import React, { Component } from 'react';
import convert from 'convert-units';
import Title from "./Title";
import WeatherInfo from "./WeatherInfo";
import "./weatherCity.css";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "./../Constants/Weathers";

const location = "Cali";
const api_key = "0d3d2a512f90aa333b024321a0e0f534";
const url_open_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_open_weather}?q=${location}&appid=${api_key}`;

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
            city : location,
            data : data
        };
    };

    getConvertUnits = (tempKelvin, velocidad) => {
        let temp = Number(convert(tempKelvin).from('K').to('C').toFixed(2));
        let vel = Number(convert(velocidad).from('m/s').to('km/h').toFixed(2));
        const data = {
            temp,
            vel
        };
        return data;
    };

    getWeatherState = () => {
        //CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY
        return SNOW;
    };

    getData = (response_data) => {
        const { humidity, temp } = response_data.main;
        const { speed } = response_data.wind;
        const weatherState = response_data.weather[0].main;
        //const weatherState = this.getWeatherState(response_data);
        var convertUnits = this.getConvertUnits(temp,speed);
        const temperature = convertUnits.temp;
        const vel = convertUnits.vel;
    
        const data = {
            humidity,
            temp: temperature,
            weatherState,
            wind: `${vel} km/h`
        };
    
        return data;
    };

    handleClick  = () => {

        fetch(api_weather).then((resolve) => {
            return resolve.json();
        }).then((data) => {
            console.log("DATA!! ", this.getData(data));
            this.setState({
                data: this.getData(data)
            });
        });
    };

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
    };
};

export default WeatherCity;