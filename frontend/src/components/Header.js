// Importing the React library from 'react' package
import React from 'react';

/**
 * Functional component 'Header' for displaying a header section in a React app.
 * 
 * Props:
 *   - title: The text title that will be displayed inside the header.
 * 
 * Usage:
 * This component is designed to be reusable and can be imported in any other component
 * to display a uniform header with a dynamic title. It uses Tailwind CSS for styling.
 * Defining a functional component named 'Header' which takes a single prop: 'title'.
 * This component is a stateless functional component, meaning it does not manage state or lifecycle methods.
 *
 * Example:
 * <Header title="Welcome to My App" />
 * 
 * @param {Object} props The props passed to the component, expects a `title` property.
 * @returns {JSX.Element} The JSX markup for the header section.
 */
const Header = ({ title }) => (
  /*
   * JSX root element 'header' with styling classes from Tailwind CSS
   * The component returns a <header> element with several class attributes for styling.
   * - `bg-blue-500`: Applies a blue background color.
   * - `text-white`: Sets the text color to white.
   * - `py-6`: Adds padding on the top and bottom of the element.
   * - `px-8`: Adds padding on the left and right of the element.
   * - `rounded-lg`: Rounds the corners of the element.
   * - `shadow-md`: Applies a medium shadow to the element for depth.
   */
  <header className="bg-blue-500 text-white py-6 px-8 rounded-lg shadow-md">
    {/* Dynamic title rendering inside an h1 HTML tag */}
    {/* Inside the <header>, there is an <h1> element that displays the 'title' prop. */}
    {/* - `text-3xl`: Sets the size of the text within the <h1>. */}
    {/* - `font-bold`: Makes the text bold. */}
    <h1 className="text-3xl font-bold">{title}</h1>
  </header>
);

/*
 * Exporting the Header component as the default export of this module. 
 * This allows the component to be imported and used in other parts of the application.
 */
export default Header;

