import React from "react";

function Search({ filterPlants, setFilteredPlants}){
  
return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={filterPlants}
        placeholder="Type a name to search..."
        onChange={(e) => setFilteredPlants(e.target.value)}
        />
    </div>
  
  );
}


export default Search;
