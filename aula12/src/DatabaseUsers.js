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

  //   find(user) {
  //     return new Promise((resolve, reject) => {
  //       let search = this.data.find((item) => item.username == user);
  //       //se o find não encontrar, a var search vai ser undefined
  //       if (search == undefined) {
  //         reject("User não encontrado");
  //       } else {
  //         //quer dizer que encontrou
  //         resolve(search.tlf); //vai mandar como paramentro o nº de telemovel
  //       }
  //     });
  //   }
}

export default Database;

//usar o método que construimos

// database1.find("mant").then(
//   //resolve
//   function (response) {
//     console.log("Success!", response);
//   },
//   //reject
//   function (error) {
//     console.error("Failed!", error);
//   }
// );
