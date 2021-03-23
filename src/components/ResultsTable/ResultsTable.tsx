import React from "react";
import TableHeader from "../TableHeader/";
import SearchResults from "../SearchResults/";
import Details from "../Details/";

import "./ResultsTable.css";

type ResultsTableProps = {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  searchResult: object[];
  searchWord: string;
};

const ResultsTable = ({
  selected,
  setSelected,
  searchResult,
  searchWord,
}: ResultsTableProps) => {
  const isKeyNull = (key: string | null) => key === null;
  const isSearchResultNotZero = (searchResult: object[]) => {
    return searchResult.length > 0;
  };
  const selectedResultsEntry = (searchResult: object[], key: string | null) => {
    return searchResult[Number(key)];
  };

  const handleClick = (
    e: React.MouseEvent<HTMLTableRowElement | HTMLButtonElement, MouseEvent>
  ) => {
    selected
      ? setSelected(null)
      : setSelected(e.currentTarget.getAttribute("id"));
  };

  return (
    <table className="result">
      {isSearchResultNotZero(searchResult) ? (
        <TableHeader selected={selected} />
      ) : null}

      <tbody>
        {isKeyNull(selected) ? (
          <SearchResults
            searchResult={searchResult}
            searchWord={searchWord}
            handleClick={handleClick}
          />
        ) : selectedResultsEntry(searchResult, selected) ? (
          <Details
            selected={selected}
            searchResult={searchResult}
            handleClick={handleClick}
          />
        ) : null}
      </tbody>
    </table>
  );
};
export default ResultsTable;
