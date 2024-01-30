import axios from "axios";
import React, { useState } from "react";
import { Audio } from "react-loader-spinner";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState("");

  function showWeather(response) {
    return setWeatherInfo(
      `temperature is ${Math.round(response.data.main.temp)} in ${city}`
    );
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="type a city ..."
          onChange={updateCity}
        ></input>
        <input type="submit" value="search"></input>
      </form>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      {weatherInfo}
    </div>
  );
}
