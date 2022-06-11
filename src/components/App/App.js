import Heading from "../Title/Heading.js";
import React from "react";
import { useState } from "react";
import "./App.css";
import NameButton from "../Button/nameButton";
import WepButton from "../Button/wepButton.js";
import DmgButton from "./../Button/dmgButton";
import { nameArray } from "./../../libs/names";
import List from "../List/index.js";

function App() {
  const [text, setText] = useState("");
	const [index, setIndex] = useState(1)
  const [arrayList, setArray] = useState([]);
    
 

  // function handleClick() {
  //   const randomNumber = Math.floor(Math.random() * nameArray.length);
   
  //     setName(randomNumber);
  // }


  function handleClick() {
  
  const randomName =  nameArray[Math.floor(Math.random() * nameArray.length)] 
  console.log(randomName.name)  
  setArray(randomName.name)
      }
     
		 

  return (
    <div className="App">
      <Heading />
      <NameButton
       className="name-button"
					onClick={handleClick}
					text={"Generate Name"}/>
      <WepButton />
      <DmgButton />
      <List text={arrayList}/>
         
            </div>
  );
}

export default App;
