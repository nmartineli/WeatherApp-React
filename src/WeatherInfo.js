import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

import HumidityWind from './HumidityWind';
import './WeatherInfo.css';

export default function WeatherInfo() {
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
      <h2>{WeatherData.city}</h2>
      <h3>{WeatherData.date}</h3>
      <h2 className="mb-2">
        <span className="temperature-number">{WeatherData.temperature}</span>
        <sup>
          <a href="/" id="celsius-link" class="active">
            {' '}
            °C
          </a>{' '}
          |
          <a href="/" id="fahrenheit-link">
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
      <h4 className="mt-3">
        <span>{WeatherData.description}</span>
      </h4>
      <HumidityWind humidity={WeatherData.humidity} wind={WeatherData.wind} />
    </div>
  );
}
