import React, { useState } from "react";

function NameButton({ onClick, className, text }) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default NameButton;
