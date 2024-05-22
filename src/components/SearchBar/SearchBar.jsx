// SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="border-gray-200 border-2 flex p-1 pl-4 rounded-lg mt-4 w-[80%] sm:w-[50%] md:w-[30%]">
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        className="focus:outline-none w-full py-2"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
