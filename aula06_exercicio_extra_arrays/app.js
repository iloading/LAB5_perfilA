//Ex1
const criarArray = (elem, numX) => {
  let array = [];
  for (let i = 0; i < numX; i++) {
    array.push(elem);
  }
  return array;
};

console.log(criarArray(1, 5)); //Output: [ 1, 1, 1, 1, 1 ]

//Ex2
const contarElementos = (array, elem) => {
  let contador = 0;
  //OU
  for (item in array) {
    if (array[item] == elem) {
      contador++;
    }
  }
  //OU:
  for (let item = 0; item < array.length; item++) {
    if (array[item] == elem) {
      contador++;
    }
  }
  //OU:
  array.map((item) => (item == elem ? contador++ : {}));
  //OU:
  array.forEach((item) => (item == elem ? contador++ : {}));

  return contador; //Output: 4 -> Como tenho 4 soluções válidas o contador está a dar 16
};

let arrayTeste = [1, 1, 1, 1, 2, 3, 4, 5];
console.log(contarElementos(arrayTeste, 1));

//Ex3
const preencherArray = (n1, n2) => {
  let array = [];
  if (n1 < n2) {
    while (n1 <= n2) {
      array.push(n1);
      n1++;
    }
  } else if (n1 > n2) {
    while (n1 >= n2) {
      array.push(n1);
      n1--;
    }
  } else {
    //Se n1 == n2
    array.push(n1);
  }
  return array;
};
console.log(preencherArray(-2, 2)); //Output:[ -2, -1, 0, 1, 2 ]
console.log(preencherArray(2, -2)); //Output:[ 2, 1, 0, -1, -2 ]
console.log(preencherArray(2, 2)); //Output:[ 2 ]

//Ex4
let string = "Hello It's Me";
let [...array] = string;
console.log(array); //Output:['H', 'e', 'l', 'l',  'o', ' ', 'I', 't',  "'", 's', ' ', 'M',  'e']

let invertido = array.map((item) =>
  item == item.toLowerCase()
    ? (item = item.toUpperCase())
    : (item = item.toLowerCase())
);
console.log(invertido.join("")); //Output: hELLO iT'S mE

//Ex5
let numeros = [4, 9, 7, 2, 1, 8];

const checkImpar = (num) => {
  if (num % 2 !== 0) {
    return 1;
  } else return 0;
};

numeros = numeros.map((item) => (checkImpar(item) ? (item = item * 2) : item));
console.log(numeros); //Output:[ 4, 18, 14, 2, 2, 8 ]
