import React from "react";

function Tecla({ n, clickHandler }) {
  return (
    <div className="tecla" onClick={clickHandler}>
      {n}
    </div>
  );
}

export default Tecla;
