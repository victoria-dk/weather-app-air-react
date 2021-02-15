import React from "react";

import WeatherIcon from "./WeatherIcon.js";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="search-bar">
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
                fill-rule="evenodd"
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
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>
        </form>
      </div>
      <h1>Copenhagen</h1>
      <ul>
        <li>Sunday 12:00</li>
        <li>Sunny</li>
      </ul>
      <WeatherIcon />
      <div className="row">
        <div className="col-6">-20°C</div>
        <div className="col-6">
          <ul>
            <li>Pressure: 1011 hPa</li>
            <li>Humidity: 90 %</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
