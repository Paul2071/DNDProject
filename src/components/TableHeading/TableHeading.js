import React from "react";

function TableHeading ({THA, THB, THC}) {
    return (
        <tr>
        <th>{THA}</th>
        <th>{THB}</th>
        <th>{THC}</th>
      </tr>
    )
}

export default TableHeading