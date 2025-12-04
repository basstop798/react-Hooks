# Movie App - React

A modern, interactive React application for managing and filtering your favorite movies and TV shows.

## Features

✨ **Add New Movies** - Easily add your favorite movies with title, description, poster URL, and rating.

🔍 **Filter by Title** - Search movies by title in real-time.

⭐ **Filter by Rating** - Filter movies based on minimum rating threshold.

🎨 **Beautiful UI** - Modern gradient design with smooth animations and hover effects.

📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices.

⚡ **React Hooks** - Built with modern React hooks (useState, useMemo) for state management and optimization.

## Project Structure

```
src/
├── components/
│   ├── MovieCard.js          # Individual movie card component
│   ├── MovieCard.css         # MovieCard styling
│   ├── MovieList.js          # Movie list grid component
│   ├── MovieList.css         # MovieList styling
│   ├── Filter.js             # Filter component (title + rating)
│   ├── Filter.css            # Filter styling
│   ├── AddMovie.js           # Add new movie form component
│   └── AddMovie.css          # AddMovie styling
├── App.js                    # Main app component with state management
├── App.css                   # App layout styling
├── index.js                  # React entry point
└── index.css                 # Global styles
```

## Components

### MovieCard
Displays a single movie with:
- **Poster Image** - Movie poster from URL
- **Title** - Movie title
- **Description** - Movie synopsis (truncated to 3 lines)
- **Rating** - Movie rating (0-10)

### MovieList
- Displays movies in a responsive grid layout
- Shows "No movies found" message when list is empty
- Grid adapts from 1-4 columns based on screen size

### Filter
Allows filtering movies by:
- **Title Filter** - Search for movies by title (case-insensitive)
- **Rating Filter** - Show only movies with rating ≥ specified value

### AddMovie
Form to add new movies with:
- Title (required)
- Description (required)
- Poster URL (required)
- Rating 0-10 (required)
- Form validation and user feedback

## React Hooks Used

1. **useState** - Manages movie list, title filter, and rating filter states
2. **useMemo** - Optimizes filtered movies calculation to prevent unnecessary re-renders

## How to Use

1. **Add a Movie:**
   - Fill in the form at the top with movie details
   - Click "Add Movie" button
   - The new movie appears in the list

2. **Search by Title:**
   - Type in the "Filter by Title" input
   - Movie list updates in real-time

3. **Filter by Rating:**
   - Enter minimum rating (0-10) in "Filter by Rating" input
   - Only movies with that rating or higher are shown

4. **Combine Filters:**
   - Use both title and rating filters together
   - Movies must match both criteria

## Movie Object Structure

Each movie has the following attributes:
```javascript
{
  title: "Movie Title",
  description: "Movie description...",
  posterURL: "https://example.com/poster.jpg",
  rating: 8.5
}
```

## Styling

- **Color Scheme:** Purple/blue gradient background with yellow accents
- **Animations:** Fade-in effects and hover transforms
- **Responsive:** Mobile-first design with breakpoints at 768px and 480px

## Installation

1. Navigate to the project directory
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## Dependencies

- React 18+
- React DOM 18+
- CSS3 (Grid, Flexbox, Gradients)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add favorite/like functionality
- Local storage persistence
- Movie details modal/page
- Delete movie functionality
- Edit existing movies
- Movie ratings from external APIs
- Dark mode theme

---

Built with ❤️ using React Hooks
