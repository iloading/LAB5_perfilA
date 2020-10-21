//Ex1
const numero = 1;
//numero= 2; //dá erro "Assignment to constant variable" não se pode mudar o valor de uma constante

//Ex2
// var vs let

//ambos podem ter scope global:
var globalVar = 1;
let globalLet = 1;

const funcao = () => {
  //globalVar  consegue ser lido dentro e fora da funcao
  //globalLet  consegue ser lido dentro e fora da funcao
};
funcao();

//E quando é declarado dentro da função?

const funcao2 = () => {
  var funcaoVar = 1;
  let funcaoLet = 1;
  //funcaoVar consegue ser lido dentro da mesma funcao
  //funcaoLet consegue ser lido dentro da mesma funcao
};
funcao2();
//funcaoVar Não consegue ser lido fora da função
//funcaoLet Não consegue ser lido fora da função

//Mas funcionam de maneira diferente relativamente ao scope em block:
{
  var blockVar = 1;
  let blockLet = 1;
  //blockVar consegue ser lido dentro do block
  //blockLet consegue ser lido dentro do block
}
//blockVar consegue ser lido fora do block
//blockLet Não consegue ser lido fora do block

//Por isso na caso de termos variaveis com o mesmo nome dentro e fora de blocks, a lógica funcionará da seguinte maneira:

var x = 0;

{
  var x = 5;
  //aqui x = 5
}
//aqui x = 5

//no entanto:
var z = 10;
{
  let z = 0;
  // aqui z = 0
}
// aqui z = 10

//Ex3
var nome = "Samuel";
console.log("o meu nome é" + nome);

//passa a ser:
console.log(`o meu nome é  ${nome} ou "Sam"`);

//assim podemos usar "" e '' sem que as mesmas interfiram com a concatenação de strings/variaveis

//Ex4
function teste(num = 1) {
  //sem arrow function
  //o default, caso não seja passado nada, num = 1
  console.log(typeof num);
  console.log(num);
}

teste(); // 'number' (num é definido para 1)
teste(undefined); // 'number' (num é definido para 1 também)
teste(""); // 'string' (num é definido para '')
teste(null); // 'object' (num é definido para null)

//Ex5 igual mas com arrow function
const teste2 = (num = 1) => {
  //o default, caso não seja passado nada, num = 1
  console.log(typeof num);
  console.log(num);
};
teste2(); // 'number' (num é definido para 1)
teste2(undefined); // 'number' (num é definido para 1 também)
teste2(""); // 'string' (num é definido para '')
teste2(null); // 'object' (num é definido para null)

//Ex6

function Receita(nome, numeroPessoas, ingredientes) {
  (this.nome = nome),
    (this.numeroPessoas = numeroPessoas),
    (this.ingredientes = ingredientes);
}
let boloChocolate = new Receita("Bolo de Chocolate", 1, ["farinha","açucar","chocolate","fermento"]);
// object Destructuring
let { ingredientes } = boloChocolate;
ingredientes.map((item) => console.log(item));
//OU

boloChocolate.ingredientes.map((item) => console.log(item));

//Ex7
var aprovados = [
  { candidato: "Maira Soares", nota: 16, idade: 17 },
  { candidato: "Manuel Marques", nota: 14, idade: 20 },
  { candidato: "Nuno Gomes", nota: 15, idade: 19 },
  { candidato: "Patrícia Oliveira", nota: 14, idade: 21 },
  { candidato: "Adriana Pedrosa", nota: 17, idade: 22 },
];

const ordenar = (array) => {
  array.sort((a, b) => {
    if (a.nota === b.nota) {
      //se as notas forem iguais
      return a.idade - b.idade;
    } else {
      //Se as notas forem diferentes
      return b.nota - a.nota;
    }
  });
};
ordenar(aprovados);
console.log(aprovados);
