import React from "react";

function Table() {
  return (
    <div className="app-container">
        <table>     
        <thead>
            <tr>
                <th>Weapon Type</th>
                <th>Weapon Name</th>
                <th>Damage Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               <td>Long Sword</td> 
               <td>Caesura</td> 
               <td>Posion</td> 
            </tr>
        </tbody>
        </table>
    </div>
  )
}
export default Table;
