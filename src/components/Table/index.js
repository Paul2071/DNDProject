import React from "react";
import TableRows from "../TableRows";
import TableHeading from "../TableHeading/TableHeading";

function Table({ arrayList, THA, THB, THC }) {
  return (
    <div className="app-container">
      <table>
        <thead>
        <tr>
        <th>{THA}</th>
        <th>{THB}</th>
        <th>{THC}</th>
      </tr>
        </thead>
        <TableRows arrayList={arrayList} />
      </table>
    </div>
  );
}
export default Table;
