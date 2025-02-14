import React from "react";

const MovieItem = ({ movie, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-gray-600">Year: {movie.year}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => onEdit(movie)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(movie.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
