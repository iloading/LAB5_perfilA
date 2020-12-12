import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <br />
        <h1>
          -------------------------------------Ex1------------------------------------
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

        <Switch>
          <Route path="/sobre">
            <h1>Estamos no Sobre</h1>
          </Route>
          <Route path="/eventos">
            <h1>Estamos nos Eventos</h1>
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

export default App;
