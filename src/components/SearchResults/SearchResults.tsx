import React from "react";

type SearchResultsProps = {
  searchResult: object[];
  searchQuery: string;
  handleClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
};

const SearchResults = ({ searchResult, searchQuery, handleClick, }: SearchResultsProps): JSX.Element => {
  return (
    <>
      {searchResult.map((item: any, index: number) => {
        const name: string = item.name;
        const pattern: string = searchQuery.toLowerCase();
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
          <tr key={item.name} onClick={handleClick} id={String(index)}>
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
