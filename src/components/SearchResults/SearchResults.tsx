import React from "react";

import "./searchResults.css";

type SearchResultsProps = {
  searchResult: object[];
  searchWord: string;
  handleClick: (
    e: React.MouseEvent<HTMLTableRowElement | HTMLButtonElement, MouseEvent>
  ) => void;
};

const SearchResults = ({
  searchResult,
  searchWord,
  handleClick,
}: SearchResultsProps): JSX.Element => {
  return (
    <>
      {searchResult.map((item: any, index: number) => {
        const name: string = item.name;
        const pattern: string = searchWord.toLowerCase();
        const string: string = name.toLowerCase();
        const position: number = string.indexOf(pattern);
        const begin: string = name.substring(0, position);
        const highlighted: string = name.substring(
          position,
          position + pattern.length
        );
        const end: string = name.substring(
          position + pattern.length,
          name.length
        );
        return (
          <tr
            className="result-row"
            key={item.name}
            onClick={handleClick}
            id={String(index)}
          >
            <td>
              {begin}
              <b>{highlighted}</b>
              {end}
            </td>
            <td>{item.type}</td>
          </tr>
        );
      })}
    </>
  );
};

export default SearchResults;
