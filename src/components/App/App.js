import Heading from "../Title/Heading.js";
import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "../Button/Button";
import { damageArray } from "./../../libs/dmg.js";
import { nameArray } from "./../../libs/names.js";
import { weaponArray } from "../../libs/weapons.js";
import List from "../List/index.js";

function App() {
  const [arrayList, setArray] = useState([]);

  function handleClickName() {
    console.log(arrayList);
    const randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
    console.log(randomName.name);
    setArray([...arrayList, randomName]);
  }
  function handleClickWep() {
    console.log(arrayList);
    const randomName =
      weaponArray[Math.floor(Math.random() * weaponArray.length)];
    console.log(randomName.name);
    setArray([...arrayList, randomName]);
  }
  function handleClickDmg() {
    console.log(arrayList);
    const randomName =
      damageArray[Math.floor(Math.random() * damageArray.length)];
    console.log(randomName.name);
    setArray([...arrayList, randomName]);
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
        
       </div>
      <ul>
        {arrayList.map(function (item) {
          return (
            <li key={item.id[Math.floor(Math.random() * 20)]}>{item.name}</li>
          );
        })}
        ,
      </ul>
    </div>
  );
}

export default App;
