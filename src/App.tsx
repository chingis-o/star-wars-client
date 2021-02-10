import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable/";

import useSearchUpdate from "./hooks/useSearchUpdate";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<object[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  useSearchUpdate({ setIsSearching, setSearchResult, searchQuery });

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        isSearching={isSearching}
        setSearchQuery={setSearchQuery}
        setSearchResult={setSearchResult}
      />
      <ResultsTable
        selected={selected}
        setSelected={setSelected}
        searchResult={searchResult}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
