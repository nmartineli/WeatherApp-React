import React from 'react';
import './CitySearch.css';

export default function CitySearch() {
  return (
    <div className="CitySearch">
      <form className="row" id="searchCityBox">
        <div className="col-7">
          <input
            type="search"
            className="form-control shadow-sm"
            id="searchBox"
            aria-describedby="searchBox"
            placeholder="Search city"
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary shadow-sm"
            id="searchCityButton"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary shadow-sm"
            id="currentLocationButton"
          >
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
