//Ex1
//No bueno
const arrayOriginal = [0, 1, 2, 3, 4, 5];
const arrayDuplicado = arrayOriginal;

arrayDuplicado.push(6);
console.log(arrayOriginal); //Output  [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(arrayDuplicado); //Output [ 0, 1, 2, 3, 4, 5, 6 ]

//Bueno
const arrayOriginal2 = [0, 1, 2, 3, 4, 5];
const arrayDuplicado2 = [...arrayOriginal];

arrayDuplicado2.push(6);
console.log(arrayOriginal2); //Output  [ 0, 1, 2, 3, 4, 5 ]
console.log(arrayDuplicado2); //Output [ 0, 1, 2, 3, 4, 5, 6 ]

//Ex2
function* range(inicio, fim) {
  //Criar um array com os valores de "inicio" a "fim"
  let array = Array.from({ length: fim - inicio + 1 }, (v, k) => inicio + k);

  //Como um array é iterável, podemos usar o ciclo for...of
  for (item of array) {
    yield item;
  }
}
let teste = range(0, 5);
console.log(
  teste.next(),
  teste.next(),
  teste.next(),
  teste.next(),
  teste.next(),
  teste.next(),
  teste.next()
);

//Ex3
function* gerador() {
  yield "1ª paragem";
  yield "2ª paragem";
  yield "3ª paragem";
}

let ex3 = gerador();
console.log(ex3.next());
console.log(ex3.next());
console.log(ex3.next());

//Ex4
let array1 = [1, 2, 3, 4];
let set1 = new Set([1, 2, 3, 4]);

for (item of array1.entries()) {
  console.log(item);
}
for (item of set1.entries()) {
  console.log(item);
}

//Ex5
function* contador() {
  for (let index = 1; index <= 10; index++) {
    yield index;
  }
}
let contar = contador();

console.log(contar.next());
console.log(contar.next());
console.log(contar.next());
console.log(contar.next());
console.log(contar.next());
console.log(contar.next());
console.log(contar.next());
console.log(contar.next());
console.log(contar.next());
console.log(contar.next());

//Ex6
function* countdown() {
  for (let index = 9; index > 0; index--) {
    yield index;
  }
}

let contar2 = countdown();
console.log(contar2.next());
console.log(contar2.next());
console.log(contar2.next());
console.log(contar2.next());
console.log(contar2.next());
console.log(contar2.next());
console.log(contar2.next());
console.log(contar2.next());
console.log(contar2.next());

//Ex7

let ListaTarefas = {
  ListaTrf: [],
  Adicionar(descricao) {
    this.ListaTrf.push({ descricao, feito: false });
    return this;
  },
  TerminarTrf(index) {
    if (index < this.ListaTrf.length) {
      this.ListaTrf[index].feito = true;
    }
    return this;
  },
  *[Symbol.iterator]() {
    for (tarefa of this.ListaTrf) {
      yield tarefa;
    }
  },
};

ListaTarefas.Adicionar("Fazer este exercício");
ListaTarefas.Adicionar("Fazer o próximo exercício");
ListaTarefas.TerminarTrf(0);

for (let tarefa of ListaTarefas) {
  console.log(tarefa);
}
