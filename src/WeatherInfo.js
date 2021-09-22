import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

import './WeatherInfo.css';

export default function WeatherInfo(props) {
  const WeatherData = {
    city: 'São Paulo',
    date: 'Monday, 08:40',
    temperature: 18,
    description: 'Sunny',
    imgUrl: 'http://openweathermap.org/img/wn/10d@2x.png',
    humidity: 30,
    wind: 1.5,
  };
  const defaults = {
    icon: 'CLEAR_DAY',
    color: '#fff',
    size: 90,
    animate: true,
  };
  return (
    <div className="WeatherInfo">
      <h2 className="weather-info__city-name">{props.results.name}</h2>
      <h3 className="weather-info__date">{WeatherData.date}</h3>
      <h2 className="weather-info__temperature">
        {Math.round(props.results.main.temp)}
        <sup className="weather-info__temperature-units">
          <a href="/" className="weather-info__temperature-units--celsius">
            {' '}
            °C
          </a>{' '}
          |
          <a href="/" className="weather-info__temperature-units--fahrenheint">
            °F
          </a>
        </sup>
      </h2>
      <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      <h4 className="weather-info__description">
        {props.results.weather[0].description}
      </h4>
      <ul className="weather-info__humidity-wind">
        <li>
          <strong>Humidity:</strong> {props.results.main.humidity}%
        </li>

        <li>
          <strong>Wind:</strong> {props.results.wind.speed} m/s
        </li>
      </ul>
    </div>
  );
}
