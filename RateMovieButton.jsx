//U59555732
// src/components/RateMovieButton.js
import React, { useState } from 'react';

function RateMovieButton() {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleRating = (stars) => {
    setRating(stars);
    setIsRated(true);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} onClick={() => handleRating(star)}>
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
      {isRated && <p>Thank you for your rating!</p>}
    </div>
  );
}

export default RateMovieButton;
// src/components/MovieSelector.js
import React, { useState } from 'react';

const movies = [
  { id: 1, title: 'Movie A' },
  { id: 2, title: 'Movie B' },
  { id: 3, title: 'Movie C' },
  // Add more movies as needed
];

function MovieSelector({ onSelectMovie }) {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const movie = movies.find(movie => movie.id === selectedId);
    setSelectedMovie(movie);
    onSelectMovie(movie);
  };

  return (
    <select value={selectedMovie.id} onChange={handleChange}>
      {movies.map(movie => (
        <option key={movie.id} value={movie.id}>{movie.title}</option>
      ))}
    </select>
  );
}

export default MovieSelector;
// src/components/UploadButton.js
import React, { useState } from 'react';

function UploadButton() {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      alert('Image uploaded successfully!');
    }, 2000); // Simulating a 2-second upload time
  };

  return (
    <button onClick={handleUpload}>
      {isUploading ? 'Uploading...' : 'Upload Image'}
    </button>
  );
}

export default UploadButton;
