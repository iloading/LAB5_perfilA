import React from "react";

function Subtrair({ num, setNum }) {
  return <button onClick={() => setNum(num - 1)}>-</button>;
}

export default Subtrair;
