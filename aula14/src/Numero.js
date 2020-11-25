import React, { useState } from "react";
import Somar from "./Somar";
import Subtrair from "./Subtrair";

function Numero() {
  const [num, setNum] = useState(0);
  return (
    <div className="Numero">
      <h1>{num}</h1>

      <Subtrair num={num} setNum={setNum} />
      <Somar num={num} setNum={setNum} />
    </div>
  );
}

export default Numero;
