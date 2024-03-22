import React, { useState } from 'react';
import './searchbar.css'; 

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
}

export default Searchbar;
