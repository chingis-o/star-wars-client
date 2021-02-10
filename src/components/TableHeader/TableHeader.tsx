import React from "react";

type TableProps = {
  selected: string | null;
};

const TableHeader = ({ selected }: TableProps) => {
  return (
    <thead>
      {selected ? (
        <tr>
          <th colSpan={2} style={{ textAlign: "center" }}>
            Details
          </th>
        </tr>
      ) : (
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      )}
    </thead>
  );
};

export default TableHeader;
