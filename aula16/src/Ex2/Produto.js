import React from "react";
import { useLocation } from "react-router-dom";

const Produto = () => {
  //UseLocation vai ler toda a informação que foi passada
  const Location = useLocation();
  console.log(Location);
  /*{pathname: "/produtos/1", search: "", hash: "", state: undefined, key: "37kzyi"}*/

  //Pegar no pathname e extrair apenas o numero que vem no mesmo para que o possamos mostrar no return :
  let novoNumero = Location.pathname.split("/")[2];

  //Assim , se escrevermos no URL http://localhost:3000/produtos/360 , vai funcionar
  return (
    <div>
      <h5>Este é o produto nº{novoNumero}</h5>
      <h1>{novoNumero}</h1>
    </div>
  );
};
export default Produto;
