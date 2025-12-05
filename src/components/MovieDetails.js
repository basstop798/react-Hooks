import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-details-container">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>
        <div className="movie-not-found">
          <h2>Movie not found</h2>
          <p>Sorry, the movie you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Home
      </button>

      <div className="movie-details-content">
        <div className="movie-details-poster">
          <img src={movie.posterURL} alt={movie.title} className="details-poster-img" />
          <div className="rating-badge">{movie.rating}/10</div>
        </div>

        <div className="movie-details-info">
          <h1 className="details-title">{movie.title}</h1>

          <div className="rating-section">
            <span className="rating-stars">
              {'★'.repeat(Math.round(movie.rating / 2))}
              {'☆'.repeat(5 - Math.round(movie.rating / 2))}
            </span>
          </div>

          <div className="description-section">
            <h2>Description</h2>
            <p className="full-description">{movie.fullDescription}</p>
          </div>

          <div className="trailer-section">
            <h2>Trailer</h2>
            <div className="trailer-container">
              <iframe
                width="100%"
                height="500"
                src={movie.trailerLink}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
