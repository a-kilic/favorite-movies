import React, { useState } from "react";

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || isNaN(year) || year.trim() === "") {
      alert("Please enter a valid title and year!");
      return;
    }
    onAddMovie({ title, year: parseInt(year) });
    setTitle("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md mb-6">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Movie Title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Year:</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Release Year"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
