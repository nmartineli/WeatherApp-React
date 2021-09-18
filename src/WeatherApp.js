import React from 'react';
import './WeatherApp.css';
import CitySearch from './CitySearch';
import WeatherInfo from './WeatherInfo';
import Forecast from './Forecast';

export default function WeatherApp() {
  return (
    <div class="app">
      <div id="weatherNow">
        <CitySearch />
        <WeatherInfo />
        <Forecast />
      </div>
    </div>
  );
}
