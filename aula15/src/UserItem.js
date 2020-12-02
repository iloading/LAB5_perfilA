import React, { Component } from "react";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.user.id;
    this.nome = this.props.user.nome;
    this.username = this.props.user.username;
    this.gn = this.props.user.gn;
    this.tlf = this.props.user.tlf;
  }
  render() {
    return (
      <li className="list-group-item">
        <div>
          <div>
            <h5>{this.id}</h5>
            <h3>{this.nome}</h3>
            <h4>{this.username}</h4>
            <h4>{this.gn}</h4>
            <h4>{this.tlf}</h4>
          </div>
        </div>
      </li>
    );
  }
}
export default UserItem;
