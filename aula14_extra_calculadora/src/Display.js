import React from "react";

function Display({ expressao, resultado }) {
  return (
    <div className="display">
      <div className="expressao">{expressao}</div>
      <div className="resultado">{resultado}</div>
    </div>
  );
}

export default Display;
