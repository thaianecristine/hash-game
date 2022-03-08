import React, { useState } from "react";
import "../square/square.css";


const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("x");
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
