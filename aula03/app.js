//Ex1----------------------------------------
let numeros = [420, 96];

const Crescente = (array) => {
  array.sort((a, b) => a - b);
  return array;
};

console.log(Crescente(numeros));

//Ex2----------------------------------------
let numeros2 = [420, 96, 500];

const Decrescente = (array) => {
  array.sort((a, b) => b - a);
  return array;
};

console.log(Decrescente(numeros2));

//Ex3----------------------------------------
let numeros3 = [1, 5, 3, 4];

const Inverso = (array) => {
  array.reverse();
  return array;
};

console.log(Inverso(numeros3));

//Ex4----------------------------------------
//O que fiz no ex1 serve para aqui, so... yeah ... está igual ¯\_(ツ)_/¯

let numeros4 = [420, 96, 1000, -2, 43, 2020, 9];

const Crescente2 = (array) => {
  array.sort((a, b) => a - b);
  return array;
};

console.log(Crescente2(numeros4));
