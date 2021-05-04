import React from 'react';
import WeatherIcon from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from "./../Constants/Weathers";
import PropTypes from "prop-types";

const icons = {
    [SUN] : "day-sunny",
    [CLOUD] : "cloud",
    [CLOUDY] : "cloudy",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [WINDY] : "windy"
};  

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState] ? icons[weatherState] : "day-fog";
    return(<WeatherIcon name={icon} size="2x" />);
};

const WeatherTemp = ({temp,weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <h3>{`${temp}°C`}</h3>
    </div>
);

WeatherTemp.propTypes = {
    weatherState : PropTypes.string.isRequired
};

export default WeatherTemp;