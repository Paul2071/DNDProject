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
  const [arrayList, setArray] = useState([]);
  

  function handleClickName() {
    const randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
    setArray([...arrayList, randomName]);
  }
  function handleClickWep() {
    const randomWep = weaponArray[Math.floor(Math.random() * weaponArray.length)];
    setArray([...arrayList, randomWep]);
  }
  function handleClickDmg() {
    const randomDmg = damageArray[Math.floor(Math.random() * damageArray.length)];
    setArray([...arrayList, randomDmg]);
  }

  function wepDmgType() {
    const randomDmg = damageArray[Math.floor(Math.random() * damageArray.length)];
    const randomWep = weaponArray[Math.floor(Math.random() * weaponArray.length)];
    const randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
    setArray([...arrayList, randomName, randomWep, randomDmg]);
  }

  return (
    <div className="App">
      <div>
        <Heading />
        <Button
          className="name-button"
          onClick={handleClickName}
          text={"Generate Name"}
        />
        <Button
          className="wep-button"
          onClick={handleClickWep}
          text={"Generate Weapon"}
        />
        <Button
          className="dmg-button"
          onClick={handleClickDmg}
          text={"Damage Type"}
        />
        <Button
          className="all-properties"
          onClick={wepDmgType}
          text={"Random Item"}
        />
      </div>
     
        {arrayList.map(function (item) {
          return (
            <List
              key={item.id[Math.floor(Math.random() * 20)]}
              item={item.name}
            ></List>
          );
        })}
      <Table />
    </div>
    
  );
}

export default App;

// {arrayList.map(function (item) {
//   return (
//     <tr key={item.id[Math.floor(Math.random() * 20)]} item= {item.name} ></tr>
//   );
// })} />
