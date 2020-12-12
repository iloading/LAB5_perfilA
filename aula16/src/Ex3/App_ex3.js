import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

import Eventos from "./Eventos";

function App3() {
  //0 será não logado
  //1 será logado
  const [login, setLogin] = useState(false);
  return (
    <Router>
      <div className="App">
        <br />
        <br />
        <h1>
          -------------------------------------Ex3------------------------------------
        </h1>
        <div>
          Login:{" "}
          <button onClick={() => setLogin(!login)}>
            {login === false ? "Entrar" : "Sair"}
          </button>
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/sobre">
          <button>Sobre</button>
        </Link>
        <Link
          to={{
            pathname: "/eventos",
            state: login,
          }}
        >
          <button>Eventos</button>
        </Link>
        <Link to="/produtos">
          <button>Produtos</button>
        </Link>
        <Link to="/contactos">
          <button>Contactos</button>
        </Link>

        <Switch>
          <Route path="/sobre">
            <h1>Estamos no Sobre</h1>
          </Route>
          <Route path="/eventos">
            <Eventos />
          </Route>
          <Route path="/produtos">
            <h1>Estamos nos Produtos</h1>
          </Route>
          <Route path="/contactos">
            <h1>Estamos nos Contactos</h1>
          </Route>
          <Route path="/">
            <h1>Estamos na Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App3;
