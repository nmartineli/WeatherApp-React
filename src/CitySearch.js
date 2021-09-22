import React, { useState } from 'react';
import axios from 'axios';

import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';

import './CitySearch.css';

export default function CitySearch() {
  const [ready, setReady] = useState(false);
  const [results, setResults] = useState({});
  const [city, setCity] = useState('London');
  const [query, setQuery] = useState(null);

  function handleResponse(res) {
    console.log(res.data);
    setResults(res.data);
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(query);
  }

  function getCity(event) {
    setQuery(event.target.value);
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
              onChange={getCity}
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
        <WeatherInfo results={results} />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = 'e9c8f163983d89bbded5b7cfe995b64a';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    console.log(url);
    axios.get(url).then(handleResponse);

    return 'Loading...';
  }
}
