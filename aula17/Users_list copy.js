import React, { useState } from "react";
import UserItem from "./UserItem";

const UsersList = ({ pesquisa }) => {
  const [resultadosAPI, setResultadosAPI] = useState([]);

  const API = `https://api.randomuser.me/?nat=${
    pesquisa || "US"
  }&results=${10}`;

  let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  function get(url) {
    return new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest();
      request.open("GET", url, true);

      request.onload = function () {
        if (request.status === 200) {
          // Resolve the promise with the response text
          resolve(JSON.parse(request.responseText).results);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(request.statusText));
        }
      };

      // Handle network errors
      request.onerror = function () {
        reject(Error("Network Error"));
      };

      // Make the request
      request.send();
    });
  }
  var x = [];
  get(API).then(
    //resolve
    function (response) {
      if (pesquisa !== "") {
        x = response.filter((item) => item.nat === pesquisa);
        console.log(x);
      }
    },
    //reject
    function (error) {
      console.error("Failed!", error);
    }
  );

  return <ul className="col-md-4 list-group">{x}</ul>;
};
export default UsersList;

// resultadosAPI.map((user) => (
//             <UserItem user={user.name.first} key={user.login.uuid} />
//           ))
