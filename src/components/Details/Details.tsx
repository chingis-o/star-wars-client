import React from "react";

import "./Details.css";

type DetailsProps = {
  selected: string | null;
  searchResult: object[];
  handleClick: (e: React.MouseEvent<HTMLTableRowElement| HTMLButtonElement, MouseEvent>) => void;
};

const Details = ({
  selected,
  searchResult,
  handleClick,
}: DetailsProps): JSX.Element => {
  const selectedResultsEntry = (searchResult: object[], key: string | null) => {
    return searchResult[Number(key)];
  };
  return (
    <>
      <button className="return-button" onClick={handleClick}>
        Back
      </button>
      {Object.entries(selectedResultsEntry(searchResult, selected)).map(
        (item) => {
          if (typeof item[1] !== "object") {
            return (
              <tr key={item[0]}>
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
