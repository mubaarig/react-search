import React, { useState } from "react";
import SearchBar from "./Search";
import SearchResults from "./SearchResults";

const SearchContainer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchQuery && <SearchResults query={searchQuery} />}
    </div>
  );
};

export default SearchContainer;
