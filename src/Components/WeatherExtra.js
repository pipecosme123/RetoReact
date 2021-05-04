import React from "react";

const WeatherExtra = ({humidity,wind}) => (
    <div className="weatherExtra">
        <h5>Información Adicional</h5>
        <span>{`${humidity}% - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtra;