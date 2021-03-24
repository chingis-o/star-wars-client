import React from "react";

import "./Details.css";

type DetailsProps = {
  selected: string | null;
  searchResult: object[];
  handleClick: (
    e: React.MouseEvent<HTMLTableRowElement | HTMLButtonElement, MouseEvent>
  ) => void;
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
    <div className="details-list">
      <button className="return-button" onClick={handleClick}>
        Back
      </button>
      {Object.entries(selectedResultsEntry(searchResult, selected)).map(
        (item) => {
          return typeof item[1] !== "object" ? (
            <tr key={item[0]}>
              <td className="details-list__name">
                {item[0].replace("_", " ")}
              </td>
              <td className="details-list__value">{item[1]}</td>
            </tr>
          ) : null;
        }
      )}
    </div>
  );
};

export default Details;
