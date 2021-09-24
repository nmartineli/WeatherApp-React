import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';

import './CitySearch.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function CitySearch() {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState('London');
  const [query, setQuery] = useState();
  const [weatherData, setWeatherData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    setReady(false);
    setCity(query);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  function handleResponse(res) {
    setWeatherData({
      city: res.data.name,
      country: res.data.sys.country,
      date: new Date(res.data.dt * 1000),
      temperature: Math.round(res.data.main.temp),
      description: res.data.weather[0].description,
      imgUrl: 'http://openweathermap.org/img/wn/10d@2x.png',
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
    });
    setReady(true);
  }

  function searchCity() {
    const apiKey = 'e9c8f163983d89bbded5b7cfe995b64a';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="CitySearch">
        <form className="search-form row" onSubmit={handleSubmit}>
          <div className="col-7">
            <input
              type="search"
              className="form-control shadow-sm"
              id="searchBox"
              aria-describedby="searchBox"
              placeholder="Search city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleQuery}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary shadow-sm">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary shadow-sm me-1">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} />
        <Forecast />
      </div>
    );
  } else {
    searchCity();

    return (
      <div className="mt-5 mb-5">
        <Loader
          type="ThreeDots"
          color="#FFF"
          height={40}
          width={40}
          timeout={3000}
        />
      </div>
    );
  }
}
