import React, { Component } from "react";

class Ex2 extends Component {
  constructor() {
    super();
    this.state = { text: "", botao: "" };
  }
  inputTextHandler = (e) => {
    this.setState({ text: e.target.value });
  };
  submitTextHandler = (e) => {
    e.preventDefault(); //Para quando se clicar no botão a página não dar refresh
    this.setState({ botao: this.state.text });
  };
  render() {
    return (
      <div>
        <form action="">
          <input
            placeholder="Escreve alguma coisa"
            onChange={this.inputTextHandler}
            type="text"
          />
          <button onClick={this.submitTextHandler}>
            Copiar para DIV em Negrito
          </button>
        </form>

        <div>
          <i>O que está no state:</i> {this.state.text}
        </div>
        <i>
          Clica no botão para passar o que está no state para uma div em negrito
        </i>
        <div>
          <b>{this.state.botao}</b>
        </div>
      </div>
    );
  }
}

export default Ex2;
