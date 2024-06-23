import React from 'react';

const ImageCard = ({ image, handleDelete }) => (
  <div className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    <button onClick={() => handleDelete(image.id)} className="absolute right-2 top-2 text-white bg-black bg-opacity-50 rounded-md p-1 text-xs">
      Close ✕
    </button>
    <img className="w-full h-48 object-cover" src={image.urls.small} alt={image.title} />
    <div className="p-4 bg-white">
      <h5 className="text-lg font-bold">{image.title}</h5>
      <p className="text-sm text-gray-600">{image.description}</p>
    </div>
  </div>
);



export default ImageCard;
