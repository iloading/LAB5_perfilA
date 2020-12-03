import React, { useState, useEffect } from "react";

import "./App.css";
import Display from "./Display";
import Tecla from "./Tecla";

function App() {
  const [expressao, setExpressao] = useState("");
  const [resultado, setResultado] = useState(null);

  //Botão CLR apaga toda a expressao
  const clear = () => {
    setExpressao("");
  };

  //Botão C apaga o ultimo algarismo da expressao
  const backspace = () => {
    setExpressao(expressao.slice(0, -1));
  };

  //Quando um botão é clicado
  const clickHandler = (e) => {
    //Lê que botão foi clicado
    let algarismo = e.target.innerHTML;

    //Dependente do botão vai executar a respetiva funcionalidade
    switch (algarismo) {
      case "CLR":
        clear();
        break;
      //
      case "C":
        backspace();
        break;

      default:
        setExpressao(expressao + algarismo);
        break;
    }
  };

  //Sempre que o state "expressao" muda o try catch é executado
  useEffect(() => {
    try {
      setResultado(eval(expressao));
    } catch (e) {
      setResultado("");
    }
  }, [expressao]);

  return (
    <div className="App">
      <div className="calculadora">
        <Display expressao={expressao} resultado={resultado} />
        <div className="teclas">
          <Tecla n="1" clickHandler={clickHandler} />
          <Tecla n="2" clickHandler={clickHandler} />
          <Tecla n="3" clickHandler={clickHandler} />
          <Tecla n="+" clickHandler={clickHandler} />
          <Tecla n="4" clickHandler={clickHandler} />
          <Tecla n="5" clickHandler={clickHandler} />
          <Tecla n="6" clickHandler={clickHandler} />
          <Tecla n="-" clickHandler={clickHandler} />
          <Tecla n="7" clickHandler={clickHandler} />
          <Tecla n="8" clickHandler={clickHandler} />
          <Tecla n="9" clickHandler={clickHandler} />
          <Tecla n="*" clickHandler={clickHandler} />
          <Tecla n="CLR" clickHandler={clickHandler} />
          <Tecla n="0" clickHandler={clickHandler} />
          <Tecla n="C" clickHandler={clickHandler} />
          <Tecla n="/" clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
