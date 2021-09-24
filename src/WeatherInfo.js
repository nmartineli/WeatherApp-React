import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import FormatDate from './FormatDate';
import './WeatherInfo.css';

export default function WeatherInfo(props) {
  const defaults = {
    icon: 'CLEAR_DAY',
    color: '#fff',
    size: 90,
    animate: true,
  };
  return (
    <div className="WeatherInfo">
      <h2 className="weather-info__city-name">
        {props.weatherData.city}, {props.weatherData.country}
      </h2>
      <h3 className="weather-info__date">
        <FormatDate date={props.weatherData.date} />
      </h3>
      <h2 className="weather-info__temperature">
        {props.weatherData.temperature}
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
        {props.weatherData.description}
      </h4>
      <ul className="weather-info__humidity-wind">
        <li>
          <strong>Humidity:</strong> {props.weatherData.humidity}%
        </li>

        <li>
          <strong>Wind:</strong> {props.weatherData.wind} m/s
        </li>
      </ul>
    </div>
  );
}
