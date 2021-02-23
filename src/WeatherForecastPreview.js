import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function formatDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayIndex = new Date(props.data.dt * 1000).getDay();
    let day = days[dayIndex];
    return day;
  }

  return (
    <div className="WeatherForecastData col">
      {formatDay()}
      <WeatherIcon code={props.data.weather[0].icon} />
      <span className="temperatures">
        <strong>{Math.round(props.data.temp.min)}</strong>°
        <span className="min-temps">
          <span className="divider">|</span>
          {Math.round(props.data.temp.max)}°{" "}
        </span>
      </span>
    </div>
  );
}
