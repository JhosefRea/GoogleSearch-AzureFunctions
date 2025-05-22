import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://searching-google.azurewebsites.net/api/HttpTrigger1?q=${query}&code=_4ddjvEwO4oWfAM4qZxcZ-AJ47QKfe70-WGbb1vgAH1tAzFurDH75A==`
      );
      setSearchResults(response.data.searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <h3>{result.title}</h3>
            <p>{result.snippet}</p>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              Ver más
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
