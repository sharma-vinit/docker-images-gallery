// Importing React library for using JSX and other React features
import React from 'react';

/**
 * The Search component is used to render a search form.
 * This form includes an input field and a submit button to allow users to search for images.
 *
 * Props:
 * - word: The current value of the search input, reflecting the search term.
 * - setWord: A function to update the state of the 'word' (i.e., search term).
 * - handleSubmit: A function to execute when the form is submitted.
 */
const Search = ({ word, setWord, handleSubmit }) => (
  /* 
   * The form element with an onSubmit handler to process the form submission.
   * It uses TailwindCSS classes for styling to layout the form horizontally and center it.
   */
  <form onSubmit={handleSubmit} className="flex justify-center mt-6 mb-4">

    {/* 
      Input field for entering the search term.
      - 'value' binds to the 'word' prop allowing the input to display the current search term.
      - 'onChange' updates the state of 'word' whenever the input changes, keeping the input controlled.
      - TailwindCSS is used for styling the input, making it responsive and visually appealing.
    */}
    <input
      type="text"
      placeholder="Search for images..."
      className="form-input mt-1 block w-full md:w-2/3 px-4 py-3 border rounded-md shadow-sm"
      value={word}
      onChange={(e) => setWord(e.target.value)}
    />

    {/* 
      Submit button for the form.
      - Styling includes margin, padding, background color, text color, and hover effects using TailwindCSS.
      - The button is of type 'submit', triggering form submission when clicked.
    */}
    <button
      type="submit"
      className="ml-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
    >
      Search
    </button>
  </form>
);

/*
 * Export the Search component as a default export, making it available for import in other files.
 */
export default Search;
