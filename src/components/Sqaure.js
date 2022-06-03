import React from "react";

const style = {
  background: "lightblue",
  height: "100px",
  width: "100px",
  board: "2px solid black",
  fontSize: "30px",
  cursor: "pointer",
};

function Sqaure({ value, handleClick }) {
  return (
    <button style={style} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Sqaure;
