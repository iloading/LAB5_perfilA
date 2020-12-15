import React, { useState } from "react";
import "./App.css";
import UsersList from "./Users_list";

function App() {
  const [pesquisa, setPesquisa] = useState("");

  const pesquisaHandler = (e) => {
    let input = e.target.value;
    setPesquisa(input);
  };
  return (
    <div className="App">
      <h1>Lista de Utilizadores </h1>
      <input
        placeholder="ex. 'US'...'BR'...'ES'...'FR'"
        onChange={pesquisaHandler}
        type="text"
        value={pesquisa}
      />
      <UsersList pesquisa={pesquisa} />
    </div>
  );
}

export default App;
