import React, { useState } from 'react';
import './WeatherTemperature.css';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState('celsius');

  function convertToFarenheint() {
    return (props.temperature * 9) / 5 + 32;
  }

  function showFahrenheint(event) {
    event.preventDefault();
    setUnit('farenheint');
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }

  if (unit === 'celsius') {
    return (
      <div className="WeatherTemperature">
        <h2 className="weather-info__temperature b">
          {props.temperature}
          <sup className="weather-info__temperature-units">
            {' '}
            <strong> °C </strong>|{' '}
            <a
              href="/"
              className="weather-info__temperature-units--fahrenheint"
              onClick={showFahrenheint}
            >
              °F
            </a>
          </sup>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2 className="weather-info__temperature">
          {Math.round(convertToFarenheint())}
          <sup className="weather-info__temperature-units">
            {' '}
            <a
              href="/"
              className="weather-info__temperature-units--celsius"
              onClick={showCelsius}
            >
              °C
            </a>{' '}
            | <strong>°F</strong>
          </sup>
        </h2>
      </div>
    );
  }
}
