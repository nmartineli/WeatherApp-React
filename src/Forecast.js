import React, { useState } from 'react';
import axios from 'axios';

import ForecastDay from './ForecastDay';

import './Forecast.css';

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState();

  function handleResponse(res) {
    setForecast(res.data.daily);
    setReady(true);
  }

  function loadForecast() {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;

    const apiKey = 'e9c8f163983d89bbded5b7cfe995b64a';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <ul className="list-group list-group-horizontal-md">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <li className="list-group-item flex-fill" key={index}>
                  <ForecastDay forecastData={dailyForecast} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    loadForecast();
    return null;
  }
}
