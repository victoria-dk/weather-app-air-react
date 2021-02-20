import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Copenhagen" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/victorianielsen89/"
            target="_blank"
          >
            Victoria Nielsen
          </a>{" "}
          👩‍💻 and is{" "}
          <a
            href="https://github.com/victoria-dk/weather-app-air-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
