import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/new-image?query=${word}`)
      .then(res => res.json())
      .then(data => {
        setImages([{ ...data, id: images.length, title: word }, ...images]);
        setWord('');
      })
      .catch(console.error);
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  return (
<div className="container mx-auto p-4">
  <Header title="Image Gallery" />
  <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {images.map((image, index) => (
      <ImageCard key={index} image={image} handleDelete={handleDeleteImage} />
    ))}
  </div>
</div>
  );
};

export default App;
