import axios from "axios";

import React, { useState, useEffect } from "react";

interface SearchResultProps {
  query: string;
}

const SearchResults: React.FC<SearchResultProps> = ({ query }) => {
  const [results, setResults] = useState<any[]>([]); // Assuming results structure

  useEffect(() => {
    const handleSearch = async (query: string) => {
      try {
        // Use your API endpoint or any search logic here
        const response = await axios.get(
          `https://fakestoreapi.com/products?category=${query}`
        );
        if (!response) {
          throw new Error("Failed to fetch results");
        }
        console.log(response.data);
        setResults(response.data);
        // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query) {
      handleSearch(query);
    }
  }, [query]);
  const resFiltered = results
    .map((item) => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);
  return (
    <div>
      <h2>Search Results for {query}</h2>
      <ul>
        {resFiltered.map((result) => (
          <li key={result.id}>{result.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
