import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [weatherData, setWeatherData] = useState({});
  function showWeather(response) {
    setLoaded(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form className="d-flex ms-4" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="type a city..."
        className="w-100"
        onChange={updateCity}
      ></input>
      <input
        type="submit"
        value="Search"
        className="ms-4 btn btn-primary"
      ></input>
    </form>
  );

  return (
    <div className="container">
      <form className="d-flex ms-4" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="type a city..."
          className="w-100"
          onChange={updateCity}
        ></input>
        <input
          type="submit"
          value="Search"
          className="ms-4 btn btn-primary"
        ></input>
      </form>
      <h2 className=" ms-4 mt-3">{city}</h2>
      <h6 className=" ms-4">Wednesday 10:20</h6>
      <h6 className=" ms-4 description">{weatherData.description}</h6>

      <div className="row">
        <div className="col-6">
          <h1 className="temperature  ms-4 ">
            {weatherData.temperature} <small className="unit">°C</small>
          </h1>
        </div>
        <div className="col-6">
          <ul className="text-start">
            <li className="precipitation">
              Humidity: {weatherData.humidity}%{" "}
            </li>
            <li className="wind">Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
