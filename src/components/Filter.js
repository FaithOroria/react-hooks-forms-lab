import React, { useState, useEffect } from "react";


function Filter({ search, onCategoryChange, onSearchChange }) {
 
  const [searchText, setSearchText] = useState(search);


  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchText(newValue);
    // search text to the parent component using the onSearchChange callback
    onSearchChange(newValue);
  };

  return (
    <div className="Filter">
      {/* Make the input a controlled component */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
