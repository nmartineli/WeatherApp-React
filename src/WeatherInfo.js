import React from 'react';
import FormatDate from './FormatDate';
import WeatherTemperature from './WeatherTemperature';
import WeatherIcon from './WeatherIcon';
import './WeatherInfo.css';

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="weather-info__city-name">
        {props.weatherData.city}, {props.weatherData.country}
      </h2>
      <h3 className="weather-info__date">
        <FormatDate date={props.weatherData.date} />
      </h3>
      <WeatherTemperature temperature={props.weatherData.temperature} />
      <WeatherIcon icon={props.weatherData.icon} size={90} color={'#fff'} />
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
