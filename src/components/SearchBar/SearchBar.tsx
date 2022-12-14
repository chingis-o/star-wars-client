import React from "react";
import { searchResult } from "../../hooks/useSearchUpdate";

import "./SearchBar.css";

type SearchBarProps = {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setSearchResult: React.Dispatch<React.SetStateAction<searchResult[]>>;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
};

const SearchBar = ({
  searchWord,
  setSearchWord,
  setSearchResult,
  setSelected,
}: SearchBarProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    setSearchResult([]);
    setSelected(null);
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
