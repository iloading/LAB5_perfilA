//Ex1
let livros = [
  { Titulo: "GoT", Autor: "RR Martin", Lido: true },
  { Titulo: "GoT2", Autor: "RR Martin", Lido: true },
  { Titulo: "GoT3", Autor: "RR Martin", Lido: false },
  { Titulo: "GoT4", Autor: "RR Martin", Lido: false },
];

//só mostrar os lidos
let livrosLidos = livros.filter((item) => item.Lido == true);
//só mostrar os não lidos
let livrosNaoLidos = livros.filter((item) => item.Lido == false);
//mostrar todos com base se foram lidos ou não (nao lidos primeiro)
livros.sort((a, b) => a.Lido - b.Lido);
console.log(livros);

//Ex2

const Filme = function (Titulo, Ano, Elenco) {
  this.titulo = Titulo;
  this.ano = Ano;
  this.elenco = Elenco;
};

let inception = new Filme("Inception", 2010, "Leonardo DiCaprio");
let interstellar = new Filme("Interstellar", 2014, "Matthew McConaughey");

let videoclube = [inception, interstellar];

//Tudo isto é a mm coisa que fazer:
//Só que no exemplo de cima cada objeto está associado a uma variável
let videoclube2 = [
  { titulo: "Inception", ano: 2010, elenco: "Leonardo DiCaprio" },
  { titulo: "Interstellar", ano: 2014, elenco: "Matthew McConaughey" },
];

//Interpretando a pergunta no sentido em que não sabemos quais são as propiedades do objecto e queremos mostrá-las todas:
const mostrarInfo = (filme) => {
  //para cada atributo que exista no objeto filme, fazemos o respetivo console log
  for (atributo in filme) {
    console.log(filme[atributo]);
  }
};

//mostrar os detalhes de todos os filmes no array:
//para cada filme no videoclub, vamos executar a função mostrarInfo

videoclube.map((filme) => mostrarInfo(filme));
//videoclube2.map((filme) => mostrarInfo(filme)); IGUAL

//Ex3 - Spread Operator
let num = [1, 2, 3, 4, 5, 6];

const multiplicar = (a, b, c, d, e, f) => {
  return a * b * c * d * e * f;
};

console.log(multiplicar(...num)); //720

//Ex4 - Rest Operator
const multiplicar2 = (...numeros) => {
  let resultado = 1;
  for (let numero of numeros) {
    resultado *= numero;
  }
  return resultado;
};

console.log(multiplicar2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //3628800

//Ex5
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [...arr1, ...arr2];
let arr4 = arr1.concat(arr2);

console.log(arr3);
console.log(arr4);

//Ex6
let numeros = [1, 2, 3, 4];
console.log(Math.min(...numeros));

//Ex7
let arrayOriginal = [1, 2, 3, 4];
let [...elementos] = arrayOriginal;
console.log(elementos);

//Ex8
let pessoa = {
  nome: "Zé",
  idade: undefined,
};

const frase = ({ nome: nomePessoa, idade: idadePessoa = 10 }) => {
  console.log(`Olá! O meu nome é ${nomePessoa} e tenho  ${idadePessoa} anos`);
};
frase(pessoa); //Olá! O meu nome é Zé e tenho  10 anos
