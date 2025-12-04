import React, { useState } from 'react';
import './AddMovie.css';

function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title || !description || !posterURL || !rating) {
      alert('Please fill in all fields');
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 10) {
      alert('Rating must be a number between 0 and 10');
      return;
    }

    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };

    onAddMovie(newMovie);

    // Reset form
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div className="add-movie-container">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <div className="form-group">
          <label htmlFor="title">Movie Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter movie title"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter movie description"
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <label htmlFor="posterURL">Poster URL:</label>
          <input
            id="posterURL"
            type="text"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            placeholder="Enter poster image URL"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (0-10):</label>
          <input
            id="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter rating"
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
