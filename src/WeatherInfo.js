import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import FormatDate from './FormatDate';
import './WeatherInfo.css';

export default function WeatherInfo(props) {
  const weatherData = {
    city: props.results.name,
    country: props.results.sys.country,
    date: new Date(props.results.dt * 1000),
    temperature: Math.round(props.results.main.temp),
    description: props.results.weather[0].description,
    imgUrl: 'http://openweathermap.org/img/wn/10d@2x.png',
    humidity: props.results.main.humidity,
    wind: props.results.wind.speed,
  };
  const defaults = {
    icon: 'CLEAR_DAY',
    color: '#fff',
    size: 90,
    animate: true,
  };
  return (
    <div className="WeatherInfo">
      <h2 className="weather-info__city-name">
        {weatherData.city}, {weatherData.country}
      </h2>
      <h3 className="weather-info__date">
        <FormatDate date={weatherData.date} />
      </h3>
      <h2 className="weather-info__temperature">
        {weatherData.temperature}
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
      <h4 className="weather-info__description">{weatherData.description}</h4>
      <ul className="weather-info__humidity-wind">
        <li>
          <strong>Humidity:</strong> {weatherData.humidity}%
        </li>

        <li>
          <strong>Wind:</strong> {weatherData.wind} m/s
        </li>
      </ul>
    </div>
  );
}
