import React from "react";
import CurrentDate from "./CurrentDate";
import DayTime from "./DayTime";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                description={props.data.description}
              />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="daytime">
              <ul>
                <li>
                  Sunrise: <DayTime time={props.data.sunrise} />
                </li>
                <li>
                  Sunset: <DayTime time={props.data.sunset} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li>Feels like: {Math.round(props.data.feels)} °C</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Pressure: {props.data.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
