import React from "react";
import UserItem from "./UserItem";
import Database from "./Database";

const UsersList = ({ pesquisa }) => {
  const users = new Database();

  let search = [];
  users.data.forEach((user) =>
    user.nome.includes(pesquisa)
      ? search.push(user)
      : null || user.username.includes(pesquisa)
      ? search.push(user)
      : null || user.gn.includes(pesquisa)
      ? search.push(user)
      : null || user.tlf.includes(pesquisa)
      ? search.push(user)
      : null
  );

  return (
    <ul className="col-md-4 list-group">
      {search.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </ul>
  );
};
export default UsersList;
