import React from "react";

import "./WeatherIcon.css";

export default function WeatherIcon() {
  return (
    <div className="WeatherIcon">
      <img
        src={"images/01d.png"}
        alt="sun_cloud"
        className="weather-icon float-center"
      />
    </div>
  );
}
