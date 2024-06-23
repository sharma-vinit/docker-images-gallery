/*
 * Import React and the useState hook for managing state in the App component.
 */
import React, { useState } from 'react';

/*
 * Importing custom components that will be used in the App component.
 */
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';

/*
 * The App component is defined as a functional component using an arrow function.
 */
const App = () => {
  /*
   * useState hook to manage the 'word' state, used for storing the current search term.
   */
  const [word, setWord] = useState('');
  /*
   * useState hook to manage the 'images' state, used for storing the list of images fetched from the API.
   */
  const [images, setImages] = useState([]);

  /*
   * handleSearchSubmit is a function that handles the submission of the search form.
   */
  const handleSearchSubmit = (e) => {
    /*
     * Prevents the default form submit behavior which would cause a page reload.
     */
    e.preventDefault();
    /*
     * Fetches new images from the API using the search term stored in 'word'.
     */
    fetch(`${process.env.REACT_APP_API_URL}/new-image?query=${word}`)
      .then(res => res.json()) 
    /*
     * Parses the JSON response into a JavaScript object.
     */
      .then(data => {
        /*
         * Adds the new image to the beginning of the images array with additional properties like id and title.
         */
        setImages([{ ...data, id: images.length, title: word }, ...images]);
        /*
         * Resets the 'word' state to an empty string after submitting the form.
         */
        setWord('');
      })
      /*
       * Logs any errors to the console.
       */
      .catch(console.error); 
  };

  /*
   * handleDeleteImage is a function that deletes an image from the images array based on its id.
   */
  const handleDeleteImage = (id) => {
    /*
     * Updates the 'images' state by filtering out the image with the matching id.
     */
    setImages(images.filter(image => image.id !== id));
  };

  /*
   * The JSX returned by the App component defines the structure and layout of the UI.
   */
  return (
    <div className="container mx-auto p-4"> {/* Styling applied using Tailwind CSS for a responsive container */}
    <Header title="Image Gallery" /> {/* Renders the Header component with a title prop */}
    <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} /> {/* Renders the Search component, passing state and handlers as props */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> {/* Grid layout for image cards, responsive based on screen size */}
      {images.map((image, index) => ( 
        /*
         * Maps over the 'images' array to render an ImageCard for each image.
         */
        <ImageCard key={index} image={image} handleDelete={handleDeleteImage} /> 
        /*
         * Each ImageCard receives an image object and a delete handler function.
         */
      ))}
    </div>
  </div>
);
};

/*
 * Exports the App component as the default export of this module.
 */
export default App;
