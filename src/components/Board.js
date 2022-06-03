import React from "react";
import Sqaure from "./Sqaure";

const style = {
  display: "grid",
  height: "300px",
  width: "300px",
  gridTemplateColumns: "repeat(3,1fr)",
  gridTemplateRows: "repeat(3,1fr)",
};
function Board({ squares, handleClick }) {
  return (
    <div style={style}>
      {squares?.map((item, i) => {
        return (
          <Sqaure key={i} value={item} handleClick={() => handleClick(i)} />
        );
      })}
    </div>
  );
}

export default Board;
