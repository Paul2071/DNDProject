import React from "react";

function NameButton ( {handleClick}) {
  
  return  <button className="name-button" onClick={() => handleClick()}>Generate Name</button>
    
}

export default NameButton;