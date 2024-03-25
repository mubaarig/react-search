import React, { useState } from "react";
import useDebounce from "../customHooks/useDebounce";

interface Product {
  id: number;
  category: string;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const fakeAPISearch = async (query: string): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?category=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch autocomplete results");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching autocomplete results:", error);
    return [];
  }
};
const Search: React.FC<SearchBarProps> = ({ onSearch }): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [autocompleteResults, setAutocompleteResults] = useState<Product[]>([]);
  //Debounce the search
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearch;
    if (value.trim() === "") {
      setAutocompleteResults([]);
      return;
    }
    try {
      const results = await fakeAPISearch(value);
      setAutocompleteResults(results);
    } catch (error) {
      console.error("Error fetching autocomplete results:", error);
    }
  };

  const handleAutocompleteClick = (product: Product) => {
    setSearchTerm(product.category);
    setAutocompleteResults([]);
    onSearch(product.category);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };


   const autoCompletedFiltered = autocompleteResults.filter((itm,pos,self)=> (itm) === itm);

   console.log(autoCompletedFiltered);
  return (
    <div className="max-w-3xl mx-auto">
      {/* <!--Search icon--> */}

      <form className="max-w-md mx-auto mt-5" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-A0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border
             border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500
              focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600
               dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search Mockups, Logos..."
            value={searchTerm}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5
             bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none
              focus:ring-gray-300 font-medium   
              text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 
              dark:focus:ring-gray-800"
          >
            Search
          </button>
        </div>
        <p className="text-left">Debounced Value: {debouncedSearch}</p>
        <ul>
          
          { 
          autoCompletedFiltered.map((result) => (
            <li key={result.id} onClick={() => handleAutocompleteClick(result)}>
              <p className="bg-gray-300 border-separate"> 
              <span className="bg-blue-400 text-white">{result.category}</span></p>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Search;
