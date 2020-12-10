import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Produto from "./Produto";

function App2() {
  return (
    <Router>
      <div className="App">
        <br />
        <br />
        <h1>
          -------------------------------------Ex2------------------------------------
        </h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/sobre">
          <button>Sobre</button>
        </Link>
        <Link to="/eventos">
          <button>Eventos</button>
        </Link>
        <Link to="/produtos">
          <button>Produtos</button>
        </Link>
        <Link to="/contactos">
          <button>Contactos</button>
        </Link>
        <div>
          <Link to="/produtos/1">
            <button>
              <i>Ver Produto nº1</i>
            </button>
          </Link>
        </div>

        <Switch>
          <Route path="/sobre">
            <h1>Estamos no Sobre</h1>
          </Route>
          <Route path="/eventos">
            <h1>Estamos nos Eventos</h1>
          </Route>
          <Route path="/produtos/:id">
            <Produto />
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

export default App2;
