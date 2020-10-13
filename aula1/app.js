//Ex 1
const Last = (array) => {
  let lastElement = array[array.length - 1];
  return lastElement;
};

let nomes = ["Zé", "Manel", "Rui"];

console.log(Last(nomes)); //Vai retornar "Rui"

//Ex 2
let arr2 = [5, 7, 9];
arr2.push(6);
console.log(arr2);
//Vai ficar [5, 7, 9, 6]

//Ex 3
var arr3 = [2, 3, 4];
arr3.unshift(0, 1);
arr3.push(5, 6, 7);
console.log(arr3);
//Vai ficar [0, 1, 2, 3, 4, 5, 6, 7]

//Ex 4
let arr4 = [4, 9, 7, 2, 1, 8];

const isOdd = (numero) => {
  return numero % 2;
};

//Criando um novo array (acho que não é o que é pedido na pergunta)
let arr5 = [];
arr4.map((item) => (isOdd(item) ? arr5.push(item * 2) : arr5.push(item)));
//MESMA COISA QUE:
// arr4.map((item) => {
//   if (isOdd(item)) {
//     arr5.push(item * 2);
//   } else {
//     arr5.push(item);
//   }
// });

//Alterando os números no array inicial
arr4.map((item) => (isOdd(item) ? (arr4[arr4.indexOf(item)] = item * 2) : {}));
//MESMA COISA QUE:
// arr4.map((item) => {
//   if (isOdd(item)) {
//     arr4[arr4.indexOf(item)] = item * 2;
//   } else {
//   }
// });

//Para verificar
console.log(arr4);
console.log(arr5);

//Ex5
const Ex5 = (array, index) => {
  return array[index];
};

//para testar que está a funcionar
let teste = [99, 98, 97, 96, 95];
console.log(Ex5(teste, 0)); //Executamos a função passando o array "teste" e o index 0
