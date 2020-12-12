import React from "react";
import { useLocation } from "react-router-dom";

function Eventos() {
  const Location = useLocation();
  //Lemos o que vem no state
  let { state } = Location;

  return (
    <div>
      {/* Se o state for true, quer dizer que estamos logados e a informação será mostrada, se for false não mostra nada  */}
      {state === true ? (
        <div>
          <h1>Estás logado e estás na Tab Eventos</h1>
        </div>
      ) : (
        <h5>
          Não estás logado, faz login e carrega novamente no botão para mostrar
          o conteúdo
        </h5>
      )}
    </div>
  );
}

export default Eventos;
