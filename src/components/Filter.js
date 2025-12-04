import React from 'react';
import './Filter.css';

function Filter({ onTitleFilter, onRatingFilter, titleFilter, ratingFilter }) {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label htmlFor="title-filter">Filter by Title:</label>
        <input
          id="title-filter"
          type="text"
          placeholder="Search by movie title..."
          value={titleFilter}
          onChange={(e) => onTitleFilter(e.target.value)}
          className="filter-input"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="rating-filter">Filter by Rating (min):</label>
        <input
          id="rating-filter"
          type="number"
          min="0"
          max="10"
          placeholder="Minimum rating..."
          value={ratingFilter}
          onChange={(e) => onRatingFilter(e.target.value)}
          className="filter-input"
        />
      </div>
    </div>
  );
}

export default Filter;
