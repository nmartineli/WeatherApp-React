import React from 'react';
import './HumidityWind.css';

export default function HumidityWind(props) {
  return (
    <div className="HumidityWind">
      <ul>
        <li>
          <strong>Humidity:</strong> {props.humidity}%
        </li>

        <li>
          <strong>Wind:</strong> {props.wind} km/h
        </li>
      </ul>
    </div>
  );
}
