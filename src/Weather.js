import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday 15:30",
      description: response.data.weather[0].description,
      iconUrl: "",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <button type="button" className="button-geolocation">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-geo-alt-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </button>
          <input
            className="input-search"
            type="search"
            placeholder="Search for city..."
            autoComplete="off"
            autoFocus="on"
          />
          <button className="button-search" type="submit" value="search">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <WeatherIcon />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              <li>Feels like: {Math.round(weatherData.feels)} °C</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Pressure: {weatherData.pressure} hPa</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "87429fdbf593621029427a484995b880";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
