import Heading from "../Title/Heading.js";
import React from "react";
import { useState } from "react";
import "./App.css";
import NameButton from "../Button/nameButton";
import WepButton from "../Button/wepButton.js";
import DmgButton from './../Button/dmgButton';
import { nameArray } from './../../libs/names';

function App() {

  const [nameIndex, setName] = useState("")


function handleClick () {
  const randomNumber = Math.floor(Math.random() * nameArray.length);
  console.log(randomNumber)
  setName(randomNumber)
}


  return (
    <div className="App">
      <Heading />
      <NameButton handleClick={handleClick}/>
      <WepButton />
      <DmgButton />
      <li type="name-list"></li>
    </div>
  
  );
}

export default App;
