import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p className="footer__text">
          This project was coded by{' '}
          <a
            href="https://lucid-williams-3971e9.netlify.app"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Natalia Martineli
          </a>{' '}
          and is{' '}
          <a
            href="https://github.com/nmartineli/WeatherApp-React"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{' '}
        </p>
      </footer>
    </div>
  );
}
