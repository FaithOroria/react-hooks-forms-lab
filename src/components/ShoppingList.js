
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  const itemsToDisplay = items.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;

    const textMatch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      searchText.trim() === ""; // Show all items if searchText is empty

    return categoryMatch && textMatch;
  });


  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={handleSearchChange}
      search={searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
