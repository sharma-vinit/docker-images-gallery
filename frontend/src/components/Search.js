import React from 'react';

const Search = ({ word, setWord, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="flex justify-center mt-6 mb-4">
    <input
      type="text"
      placeholder="Search for images..."
      className="form-input mt-1 block w-full md:w-2/3 px-4 py-3 border rounded-md shadow-sm"
      value={word}
      onChange={(e) => setWord(e.target.value)}
    />
    <button
      type="submit"
      className="ml-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
    >
      Search
    </button>
  </form>
);


export default Search;
