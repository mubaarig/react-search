import React from "react";
interface SearchResultsProps {
results: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({results}): JSX.Element => {
return <div>
    <ul>{results.map((result, index)=>
    <li key={index}>{result}</li>)}</ul>
</div>;
};

export default SearchResults;