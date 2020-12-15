import React, { Component } from "react";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.user.login.uuid;
    this.nome = this.props.user.name.first;
    this.username = this.props.user.login.username;
    this.gn = this.props.user.gender;
    this.tlf = this.props.user.cell;
  }
  render() {
    return (
      <li className="list-group-item">
        <div>
          <div>
            <h3>nome: {this.nome}</h3>
            <h4>username: {this.username}</h4>
            <h4>genero: {this.gn}</h4>
            <h4>telemovel: {this.tlf}</h4>
            <h5>id: {this.id}</h5>
          </div>
        </div>
      </li>
    );
  }
}
export default UserItem;
