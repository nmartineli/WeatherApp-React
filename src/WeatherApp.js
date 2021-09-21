import React from 'react';
import './WeatherApp.css';
import CitySearch from './CitySearch';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';

export default function WeatherApp() {
  return (
    <div className="app">
      <CitySearch />
      <WeatherInfo />
      <Forecast />
    </div>
  );
}
