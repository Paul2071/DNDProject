import React, {useState} from "react";
import "./App.css";
import TableHeading from "../TableHeading/TableHeading";
import Button from "../Button/Button";
import Heading from "../Heading/Heading.js";
import Table from "../Table/index.js";
import Keep from "../Keep/Keep";
import { damageArray } from "./../../libs/dmg.js";
import { nameArray } from "./../../libs/names.js";
import { weaponArray } from "../../libs/weapons.js";

function App() {
  const [arrayList, setArray] = useState([{}]);
  const [keepMe, setKeepMe] = useState([])
  

  function wepDmgType() {
    const randomDmg = damageArray[Math.floor(Math.random() * damageArray.length)];
    const randomWep = weaponArray[Math.floor(Math.random() * weaponArray.length)];
    const randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
    const newName = randomName.name;
    const newDmg = randomDmg.name;
    const newWep = randomWep.name;

    setArray([{ ...arrayList[0], newName, newDmg, newWep} ]);
    console.log(arrayList[0]);
  }

  function keepItem () {
    setKeepMe(arrayList)
  console.log(keepMe)
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

        <Button
          className="keep-item"
          onClick={keepItem}
          text={"Keep Item"}
        />
      </div>
      <Table arrayList={arrayList} THA="Weapon Name" THB="Weapon Type" THC="Damage Type"></Table>
     

       
      <Table arrayList={keepMe} THA="Saved Weapon Type" THB="Saved Weapon Name" THC="Saved Damage Type"  /> 
    
    
    </div>
  );
}

export default App;
