import React, { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleEditMovie = (movieToEdit) => {
    const updatedTitle = prompt("Enter new title:", movieToEdit.title);
    const updatedYear = prompt("Enter new year:", movieToEdit.year);
    if (updatedTitle && !isNaN(updatedYear)) {
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === movieToEdit.id
            ? { ...movie, title: updatedTitle, year: parseInt(updatedYear) }
            : movie
        )
      );
    } else {
      alert("Invalid inputs!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Favorite Movies</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList
        movies={movies}
        onDelete={handleDeleteMovie}
        onEdit={handleEditMovie}
      />
    </div>
  );
};

export default App;
