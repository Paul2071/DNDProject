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
  const [arrayList, setArray] = useState([
    ]);
    
 

  // function handleClick() {
  //   const randomNumber = Math.floor(Math.random() * nameArray.length);
   
  //     setName(randomNumber);
  // }


  async function  handleClick() {
  console.log(arrayList)
  const randomName =  nameArray[Math.floor(Math.random() * nameArray.length)] 
  console.log(randomName.name)  
  setArray([...arrayList, randomName])
  //setArray(randomName.name)
   
      }
     
		 

  return (
    <div className="App">
      <div>
      <Heading />
      <NameButton
       className="name-button"
					onClick={handleClick}
					text={"Generate Name"}/>
      <WepButton />
      <DmgButton />  
      </div>
      <ul>
        {arrayList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

    </div>
    
    
  );
  
}

export default App;
