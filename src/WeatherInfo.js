import React from "react";
import CurrentDate from "./CurrentDate";
import DayTime from "./DayTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-location">
        <h1>{props.data.city}</h1>
      </div>
      <div className="current-date-time">
        <ul>
          <li>
            <CurrentDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                description={props.data.description}
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="clearfix current-temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="daytime">
            <ul className="suntime">
              <li>
                Sunrise: <DayTime time={props.data.sunrise} />
              </li>
              <li>
                Sunset:
                <DayTime time={props.data.sunset} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
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
