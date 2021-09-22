import React from 'react';
import './WeatherApp.css';
import CitySearch from './CitySearch';

export default function WeatherApp() {
  return (
    <div className="app">
      <CitySearch />
    </div>
  );
}
