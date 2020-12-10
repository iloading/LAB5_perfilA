import React from "react";

import { useLocation } from "react-router-dom";

const Produto = () => {
  //UseLocation vai ler toda a informação que foi passada
  const Location = useLocation();
  console.log(Location);
  /*{pathname: "/produtos/1", state: 1, search: "", hash: "", key: "h5akk5"}*/

  //Agora temos o nºde produto disponível no state
  let numeroProduto = Location.state;

  /* Isto está correto e é o objetivo do exercício (passar uma propiedade por state)
  
    No entanto, neste contexto em que fiz, esta solução tem uma falha
    Como estamos a definir o state apenas no Link, se em vez de clicarmos no botao, escrevermos no url diretamente, o state não vai ficar definido. Ou seja, se escrevermos http://localhost:3000/produtos/1 ,
    NÃO vai ser mostrado no return "Este é o produto nº1".

    Então, para resolver isto, podemos usar a resolução do ex2;
  */

  //Se não existir state na const Location, usamos o pathname
  if (!numeroProduto) {
    numeroProduto = Location.pathname.split("/")[2];
  }
  return (
    <div>
      <h5>Este é o produto nº{numeroProduto}</h5>
      <h1>{numeroProduto}</h1>
    </div>
  );
};
export default Produto;
