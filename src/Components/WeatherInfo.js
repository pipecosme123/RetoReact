import React from 'react';
import WeatherExtra from "./WeatherExtra";
import WeatherTemp from "./WeatherTemp";


const WeatherInfo = ({ data }) => {
    const { temp, humidity, wind, weatherState } = data;
    return (
        <div>
            <WeatherTemp temp={temp} weatherState={weatherState}></WeatherTemp>
            <WeatherExtra humidity={humidity} wind={wind}></WeatherExtra>
        </div>
    );
};

export default WeatherInfo;