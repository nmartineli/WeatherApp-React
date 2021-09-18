import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p className="footer-text">
          <a
            href="https://github.com/nmartineli/WeatherApp-React"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Natalia Martineli
        </p>
      </footer>
    </div>
  );
}
