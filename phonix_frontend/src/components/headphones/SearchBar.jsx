import React from "react";
// import './searchbar.styles.css';

export const SearchBar = ({ placeholder, handleSearch }) => (
    <input
      className="border-solid border-2 rounded w-11/12 px-3 py-2"
      type="search"
      placeholder={placeholder}
      onChange={handleSearch}
    />
);
