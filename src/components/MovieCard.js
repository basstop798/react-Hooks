import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-description">{movie.description}</p>
        <div className="movie-rating">
          <span className="rating-label">Rating:</span>
          <span className="rating-value">{movie.rating}/10</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
