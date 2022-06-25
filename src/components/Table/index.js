import React from "react";
import TableRows from "../TableRows";
import TableHeading from "../TableHeading/TableHeading";

function Table({ arrayList }) {
  return (
    <div className="app-container">
      <table>
        <thead>
          <TableHeading THA="Weapon Type" THB="Weapon Name" THC="Damage Type"/>
        </thead>
        <TableRows arrayList={arrayList} />
      </table>
    </div>
  );
}
export default Table;
