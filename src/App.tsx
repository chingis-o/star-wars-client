import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable/";

import useSearchUpdate from "./hooks/useSearchUpdate";

import "./App.css";

function App() {
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchResult, setSearchResult] = useState<object[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useSearchUpdate({setSearchResult, searchWord });

  return (
    <div className="App">
      <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setSearchResult={setSearchResult}
        setSelected={setSelected}
      />
      <ResultsTable
        selected={selected}
        setSelected={setSelected}
        searchResult={searchResult}
        searchWord={searchWord}
      />
    </div>
  );
}

export default App;
