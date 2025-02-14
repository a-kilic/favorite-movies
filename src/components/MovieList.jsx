import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onDelete, onEdit }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p className="text-center text-gray-600">No movies added yet!</p>
      ) : (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
