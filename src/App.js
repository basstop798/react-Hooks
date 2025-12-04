import React, { useState, useMemo } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import theshawshank from './img/1994-Shawshank-Redemption-The.jpg';
import thegodfather from './img/51Eq4-xce0L.jpg';
import thedarkknight from './img/the-dark-knight-2008-movie-poster.avif';
import pulpfiction from './img/Pulp-Fiction1.png';
import mrrobot from './img/mrrobot.webp';

function App() {
  // Sample initial movies data
  const initialMovies = [
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: theshawshank,
      rating: 9.3,
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest son.',
      posterURL: thegodfather,
      rating: 9.2,
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
      posterURL: thedarkknight,
      rating: 9.0,
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
      posterURL: pulpfiction,
      rating: 8.9,
    },
    {
      title: 'Mr. Robot',
    description: 'Elliot, a brilliant but unstable cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global chaos when he and his shadowy allies try to take down the corrupt corporation his company is paid to protect.',
      posterURL: mrrobot,
      rating: 8.8,
    },
  ];

  // State management using React hooks
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Add new movie handler
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies using useMemo for optimization
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
      const ratingMatch = ratingFilter === '' || movie.rating >= parseFloat(ratingFilter);
      return titleMatch && ratingMatch;
    });
  }, [movies, titleFilter, ratingFilter]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 AlgBest</h1>
        <p>Discover and manage your favorite movies</p>
      </header>

      <main className="app-main">
        <AddMovie onAddMovie={handleAddMovie} />

        <Filter
          onTitleFilter={setTitleFilter}
          onRatingFilter={setRatingFilter}
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
        />

        <MovieList movies={filteredMovies} />
      </main>

      <footer className="app-footer">
        <p>© 2025 AlgBest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
