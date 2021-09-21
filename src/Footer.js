import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p className="footer__text">
          This is an{' '}
          <a
            href="https://github.com/nmartineli/WeatherApp-React"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{' '}
          by Natalia Martineli
        </p>
      </footer>
    </div>
  );
}
