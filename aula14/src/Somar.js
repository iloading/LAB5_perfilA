import React from "react";

function Somar({ num, setNum }) {
  return <button onClick={() => setNum(num + 1)}>+</button>;
}

export default Somar;
