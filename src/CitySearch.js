import React, { useState } from 'react';
import './CitySearch.css';
import axios from 'axios';

export default function CitySearch() {
  const [ready, setReady] = useState(false);

  const [city, setCity] = useState('London');
  const [query, setQuery] = useState();

  function handleResponse(res) {
    console.log(res.data.main);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="CitySearch">
        <form className="search-form row">
          <div className="col-7">
            <input
              type="search"
              className="form-control shadow-sm"
              id="searchBox"
              aria-describedby="searchBox"
              placeholder="Search city"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary shadow-sm">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary shadow-sm me-1">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = 'e9c8f163983d89bbded5b7cfe995b64a';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);

    return 'Loading...';
  }
}
