import React, { useState } from "react";
import useDebounce from "../customHooks/useDebounce";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  //Debounce the search
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <p>Debounced Value: {debouncedSearch}</p>
    </div>
  );
};

export default Search;
