import React from "react";

import "./SearchBar.css";

type SearchBarProps = {
  searchQuery: string;
  isSearching: boolean;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSearchResult: React.Dispatch<React.SetStateAction<object[]>>;
};

const SearchBar = ({
  searchQuery,
  isSearching,
  setSearchQuery,
  setSearchResult,
}: SearchBarProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSearching) {
      setSearchQuery(e.target.value);
      setSearchResult([]);
    }
  };
  return (
    <form method="get">
      <input
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Enter your query"
        value={String(searchQuery)}
        onChange={handleChange}
      />
    </form>
  );
};
export default SearchBar;
