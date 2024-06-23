// Import React library for using JSX
import React from 'react';

/**
 * ImageCard - React functional component that displays an image along with some information and a delete button.
 * @param {Object} image - The image object containing properties like id, urls, title, and description.
 * @param {Function} handleDelete - The function to call when the delete button is clicked, which will handle deletion logic.
 */
const ImageCard = ({ image, handleDelete }) => (
  /*
   * Container div for the image card with applied styles for layout and interactions
   */
  <div className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">

    {/* Button for deleting the image card. Positioned absolutely to float on the top-right corner of the image card. */}
    <button

      // Triggers handleDelete function on click, passing the image's id
      onClick={() => handleDelete(image.id)}

      // Styling for the button with transitions and hover effects for better user interaction feedback
      className="absolute right-2 top-2 text-white font-bold bg-black bg-opacity-50 hover:bg-opacity-80 rounded-sm p-1 text-xs transition duration-300 ease-in-out transform hover:scale-110"
      
      // Accessibility label for better screen reader support
      aria-label="Close">
      Close ✕
    </button>

    {/* The actual image being displayed */}
    <img className="w-full h-48 object-cover" src={image.urls.small} alt={image.title} />

    {/* Container for text details below the image */}
    <div className="p-4 bg-white">

      {/* Title of the image */}
      <h5 className="text-lg font-bold">{image.title}</h5>

      {/* Description of the image */}
      <p className="text-sm text-gray-600">{image.description}</p>
    </div>
  </div>
);

/*
 * Export the ImageCard component to be used in other parts of the application
 */
export default ImageCard;
