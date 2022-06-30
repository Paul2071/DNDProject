import React from "react";



function TableRows({arrayList}) {
return  <tbody>
{arrayList.map((state) => (
    <tr>
      <td>{state.newName}</td>
      <td>{state.newWep}</td>
      <td>{state.newDmg}</td>
    </tr>
  ))}
</tbody>


  }



export default TableRows;
