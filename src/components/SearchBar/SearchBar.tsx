import React from "react";

import "./SearchBar.css";

type SearchBarProps = {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setSearchResult: React.Dispatch<React.SetStateAction<object[]>>;
};

const SearchBar = ({
  searchWord,
  setSearchWord,
  setSearchResult,
}: SearchBarProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    setSearchResult([]);
  };
  return (
    <form className="searchBar" method="get">
      <input
        type="search"
        name="search"
        className="search"
        autoComplete="off"
        placeholder="Enter your query"
        value={String(searchWord)}
        onChange={handleChange}
      />
    </form>
  );
};
export default SearchBar;
