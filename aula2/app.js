//Ex1
let teste = [1, 2, 3, 4, 5, 6, 7];

const Rest = (array) => {
  let novoArray = array.filter((elemento) => array.indexOf(elemento) != 0);
  return novoArray;
};

console.log(Rest(teste)); //[ 2, 3, 4, 5, 6, 7 ]

//Ex2
const Primeiro = (array) => {
  let primeiroElemento = array[0];
  return primeiroElemento;
};
//vou usar o mesmo array do ex1
console.log(Primeiro(teste)); //1

//Ex3

const ExceptoUltimo = (array) => {
  let tamanhoArray = array.length - 1;

  let todosMenosOultimo = array.filter(
    (item) => array.indexOf(item) !== tamanhoArray
  );
  return todosMenosOultimo;
};

console.log(ExceptoUltimo(teste)); //[ 1, 2, 3, 4, 5, 6 ]

//Ex4
const Ins = (elemento, array) => {
  array.unshift(elemento);
  return array;
};
console.log(Ins(0, teste)); //[0, 1, 2, 3, 4, 5, 6, 7]

//Ex5
const End = (elemento, array) => {
  array.push(elemento);
  return array;
};
console.log(End(8, teste)); // [0, 1, 2, 3, 4,5, 6, 7, 8]

//Ex6

//a)
const soma = (array) => {
  let total = 0;
  array.map((item) => (total += item));
  return total;
};
console.log(soma(teste)); //36

//b)
const quadrado = (array) => {
  let arrayAoQuadrado = [];
  array.map((item) => arrayAoQuadrado.push(item * item));
  return arrayAoQuadrado;
};
console.log(quadrado(teste)); //[0,  1,  4,  9, 16, 25, 36, 49, 64]

//c)

const pares = (array) => {
  let arrayPares = array.filter((item) => item % 2 == 0);
  return arrayPares;
};
console.log(pares(teste)); //[ 0, 2, 4, 6, 8 ]

//Ex7
const contador = (num) => {
  if (num >= 0) {
    //Se o número for maior ou = 0
    let counter = contador(num - 1); //vai voltar a chamar a função, desta vez subtraindo 1
    counter.unshift(num); // adiciono o valor atual num array
    return counter; //retorno o array
  } else {
    //quando o num chegar a -1, pára o loop
    return [];
  }
};

console.log(contador(9)); //[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

//Ex8
const somatorioLoop = (num) => {
  let soma = 0;
  for (let i = 0; i <= num; i++) {
    soma += i;
  }
  return soma;
};

//OU
//usando a lógica da pergunta anterior, fazendo uma função recursiva
const somatorioRecursivo = (num) => {
  if (num == 1) {
    return 1;
  } else {
    let soma = num + somatorioRecursivo(num - 1);
    return soma;
  }
};

//OU
//usando a fórmula matemática para calcular o Somatório
const somatorioFormula = (num) => {
  let soma = (num * (num + 1)) / 2;
  return soma;
};

console.log(somatorioLoop(10)); //55
console.log(somatorioRecursivo(10)); //55
console.log(somatorioFormula(10)); //55
