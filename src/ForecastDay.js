import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function ForecastDay(props) {
  function maxTemperature() {
    const temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    const temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}°`;
  }

  function forecastDay() {
    const date = new Date(props.forecastData.dt * 1000);
    const day = date.getDay();
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return `${weekDays[day]}`;
  }

  function forecastIcon() {
    return props.forecastData.weather[0].icon;
  }

  return (
    <>
      <p className="mb-2">
        <b>{forecastDay()}</b>
      </p>
      <WeatherIcon icon={forecastIcon()} size={40} color="#FF5F49" />
      <div className="d-flex justify-content-around mt-1">
        <p>{minTemperature()}</p>
        <p>
          <b>{maxTemperature()}</b>
        </p>
      </div>
    </>
  );
}
