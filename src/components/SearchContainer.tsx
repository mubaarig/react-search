import React from "react";
import { useState } from "react";
import SearchResults from "./SearchResults";
import Search from "./Search";
import axios from "axios";

const SearchContainer: React.FC = (): JSX.Element => {
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = async (query: string) => {
        try {
          // Use your API endpoint or any search logic here
          const response = await axios.get(`https://api.publicapis.org/entries?q=${query}`);
          console.log(response)
          setSearchResults(response.data.results);
           // Adjust based on your API response structure
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
    
      return (
        <div>
          <Search onSearch={handleSearch} />
          <SearchResults results={searchResults} />
        </div>
      );
    };
export default SearchContainer;