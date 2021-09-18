import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

import './Forecast.css';

export default function Forecast() {
  const defaults = {
    icon: 'CLEAR_DAY',
    color: '#FF5F49',
    size: 40,
    animate: true,
  };
  return (
    <div className="Forecast">
      <ul className="list-group list-group-horizontal-md">
        <li className="list-group-item flex-fill">
          <p className="mb-2">
            <b>18:00</b>
          </p>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <div className="d-flex justify-content-around mt-1">
            <p>
              <b> 24°</b>
            </p>
            <p>17°</p>
          </div>
        </li>
        <li className="list-group-item flex-fill">
          <p className="mb-2">
            <b>18:00</b>
          </p>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <div className="d-flex justify-content-around mt-1">
            <p>
              <b> 24°</b>
            </p>
            <p>17°</p>
          </div>
        </li>
        <li className="list-group-item flex-fill">
          <p className="mb-2">
            <b>18:00</b>
          </p>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <div className="d-flex justify-content-around mt-1">
            <p>
              <b> 24°</b>
            </p>
            <p>17°</p>
          </div>
        </li>
        <li className="list-group-item flex-fill">
          <p className="mb-2">
            <b>18:00</b>
          </p>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <div className="d-flex justify-content-around mt-1">
            <p>
              <b> 24°</b>
            </p>
            <p>17°</p>
          </div>
        </li>
        <li className="list-group-item flex-fill">
          <p className="mb-2">
            <b>18:00</b>
          </p>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <div className="d-flex justify-content-around mt-1">
            <p>
              <b> 24°</b>
            </p>
            <p>17°</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
