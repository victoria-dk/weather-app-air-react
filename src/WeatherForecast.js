import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleForecastResponse(response) {
    setForecastData(response.data);
    setLoaded(true);
  }

  function getForecast() {
    let apiKey = "87429fdbf593621029427a484995b880";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
  }

  if (loaded && props.lat === forecastData.lat) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecastData.daily[0]} />
        <WeatherForecastPreview data={forecastData.daily[1]} />
        <WeatherForecastPreview data={forecastData.daily[2]} />
        <WeatherForecastPreview data={forecastData.daily[3]} />
        <WeatherForecastPreview data={forecastData.daily[4]} />
        <WeatherForecastPreview data={forecastData.daily[5]} />
      </div>
    );
  } else {
    getForecast();
    return "Loading forecast...";
  }
}
