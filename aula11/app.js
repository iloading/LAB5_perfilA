//Para funcionar é preciso instalar na consola: npm install xmlhttprequest

const api = `https://api.randomuser.me/?nat=US&results=${5}`;
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function () {
      if (request.status == 200) {
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

get(api).then(
  //resolve
  function (response) {
    //console.log("Success!", response);
  },
  //reject
  function (error) {
    console.error("Failed!", error);
  }
);

//Ex2
class Database {
  constructor() {
    this.data = [
      {
        id: 1,
        nome: "Maria Antonia",
        username: "mant",
        gn: "F",
        tlf: "3519394459",
      },
      {
        id: 2,
        nome: "Josefa Maria",
        username: "josm",
        gn: "f",
        tlf: "3519394458",
      },
      {
        id: 3,
        nome: "Mario Joao",
        username: "mj",
        gn: "m",
        tlf: "3519394456",
      },
    ];
  }

  find(user) {
    return new Promise((resolve, reject) => {
      let search = this.data.find((item) => item.username == user);
      //se o find não encontrar, a var search vai ser undefined
      if (search == undefined) {
        reject("User não encontrado");
      } else {
        //quer dizer que encontrou
        resolve(search.tlf); //vai mandar como paramentro o nº de telemovel
      }
    });
  }
}

//contruir um obj da class Database
let database1 = new Database();
//usar o método que construimos

database1.find("mant").then(
  //resolve
  function (response) {
    console.log("Success!", response);
  },
  //reject
  function (error) {
    console.error("Failed!", error);
  }
);
