import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import theshawshank from './img/1994-Shawshank-Redemption-The.jpg';
import thegodfather from './img/51Eq4-xce0L.jpg';
import thedarkknight from './img/the-dark-knight-2008-movie-poster.avif';
import pulpfiction from './img/Pulp-Fiction1.png';
import mrrobot from './img/mrrobot.webp';

function App() {
  // Sample initial movies data with enhanced structure
  const initialMovies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      fullDescription: 'In 1947, Andy Dufresne is convicted of murdering his wife and her lover. He is sentenced to two consecutive life sentences and is sent to Shawshank Penitentiary. Andy is intelligent, quiet, and kind, which helps him quickly adjust to prison life. He befriends Red, a long-term inmate known for his contraband business. Over decades, Andy maintains his humanity and dignity while working in the prison library. Through his friendship with Red and his unwavering hope, Andy eventually finds his path to freedom and redemption.',
      posterURL: theshawshank,
      rating: 9.3,
      trailerLink: 'https://www.youtube.com/embed/6hB3S9bIaco',
    },
    {
      id: 2,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest son.',
      fullDescription: 'The Godfather follows the Corleone family, particularly patriarch Vito Corleone, as he prepares to hand over his empire to his youngest son, Michael. As various mafia families vie for control and power, Michael transforms from a war hero into a ruthless mafia boss. The film explores themes of family loyalty, power, and the American Dream through the lens of organized crime.',
      posterURL: thegodfather,
      rating: 9.2,
      trailerLink: 'https://www.youtube.com/embed/UaVTIH8mujA',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
      fullDescription: 'Batman must accept the greatest psychological challenge of his ability to fight injustice when an anarchistic mastermind wreaks havoc and chaos on the people of Gotham. As the Joker pushes Batman to his limits both physically and morally, the Dark Knight must decide how far he is willing to go to save his city.',
      posterURL: thedarkknight,
      rating: 9.0,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
      fullDescription: 'Pulp Fiction weaves together the interconnected stories of Los Angeles mobster Vincent Vega and his wife Mia, associate Jules Winnfield, boxer Butch Coolidge, and gangster Marsellus Wallace. Their lives intersect in unexpected ways through violence, redemption, and dark humor as director Quentin Tarantino crafts a masterpiece of neo-noir storytelling.',
      posterURL: pulpfiction,
      rating: 8.9,
      trailerLink: 'https://www.youtube.com/embed/s7EdQ4FqSTc',
    },
    {
      id: 5,
      title: 'Mr. Robot',
      description: 'Elliot, a brilliant but unstable cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global chaos when he and his shadowy allies try to take down the corrupt corporation his company is paid to protect.',
      fullDescription: 'Mr. Robot follows Elliot Alderson, a socially awkward cybersecurity engineer and hacker with dissociative identity disorder. When a mysterious anarchist hacker known as Mr. Robot recruits him into a cybercriminal organization, Elliot embarks on a journey to dismantle the corporate infrastructure that controls society. The series explores themes of identity, power, and redemption through psychological storytelling.',
      posterURL: mrrobot,
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/embed/vQfmKUSqtwc',
    },
  ];

  // State management using React hooks
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Filter movies using useMemo for optimization
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
      const ratingMatch = ratingFilter === '' || movie.rating >= parseFloat(ratingFilter);
      return titleMatch && ratingMatch;
    });
  }, [movies, titleFilter, ratingFilter]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="app-header">
                  <h1>🎬 AlgBest</h1>
                  <p>Discover and manage your favorite movies</p>
                </header>

                <main className="app-main">
                  <AddMovie
                    onAddMovie={(newMovie) => setMovies([...movies, newMovie])}
                  />

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
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
