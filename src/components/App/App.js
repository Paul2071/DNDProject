import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "../Button/Button";
import Heading from "../Heading/Heading.js";
import List from "../List/index.js";
import Table from "../Table/index.js";
import { damageArray } from "./../../libs/dmg.js";
import { nameArray } from "./../../libs/names.js";
import { weaponArray } from "../../libs/weapons.js";

function App() {
  const [arrayList, setArray] = useState([{}]);

  function wepDmgType() {
    const randomDmg = damageArray[Math.floor(Math.random() * damageArray.length)];
    const randomWep = weaponArray[Math.floor(Math.random() * weaponArray.length)];
    const randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
    const newName = randomName.name;
    const newDmg = randomDmg.name;
    const newWep = randomWep.name;
    
    setArray([{ ...arrayList, newName, newDmg, newWep }]);
    console.log(arrayList)
  }

  return (
    <div className="App">
      <div>
        <Heading />

        <Button
          className="all-properties"
          onClick={wepDmgType}
          text={"Random Item"}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Weapon Type</th>
            <th>Weapon Name</th>
            <th>Damage Type</th>
          </tr>
        </thead>
        <tbody>
          {arrayList.map((state) => (
            <tr>
              <td>{state.newWep}</td>
              <td>{state.newName}</td>
              <td>{state.newDmg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


