import React from "react";

import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img
        src={`images/${props.code}.png`}
        alt={props.description}
        className="weather-icon float-center"
      />
    </div>
  );
}
