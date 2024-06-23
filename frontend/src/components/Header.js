import React from 'react';

const Header = ({ title }) => (
  <header className="bg-blue-500 text-white py-6 px-8 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold">{title}</h1>
  </header>
);


export default Header;
