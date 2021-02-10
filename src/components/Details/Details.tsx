import React from "react";

type DetailsProps = {
  selected: string | null;
  searchResult: object[];
  handleClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
};

const Details = ({selected, searchResult, handleClick, }: DetailsProps): JSX.Element => {
  const selectedResultsEntry = (searchResult: object[], key: string | null) => {
    return searchResult[Number(key)];
  };
  return (
    <>
      {Object.entries(selectedResultsEntry(searchResult, selected)).map(
        (item) => {
          if (typeof item[1] !== "object") {
            return (
              <tr key={item[0]} onClick={handleClick}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            );
          } else return null;
        }
      )}
    </>
  );
};

export default Details;
