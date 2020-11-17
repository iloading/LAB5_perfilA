//Ex1
let umSet = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5]);
let arrayTeste = [...umSet];

console.log(umSet); //Output: Set { 1, 2, 3, 4, 5 }
console.log(arrayTeste); //Output: [ 1, 2, 3, 4, 5 ]

//Ex2
const unirSets = (set1, set2) => {
  let set3 = new Set([...set1, ...set2]);
  return set3;
};
let outroSet = new Set([1, 1, 1, 1, 1, 1, 1, 99]);
//Vou usar o set do ex1 ("umSet") e este novo Set ("outroSet")
//Como o "umSet" já tem o valor 1, o valor 1 do "outroSet" não vai entrar

console.log(unirSets(umSet, outroSet)); //Output: Set { 1, 2, 3, 4, 5, 99 }

//Ex3
const intersetarSets = (set1, set2) => {
  let set3 = new Set([...set1].filter((item) => set2.has(item)));
  return set3;
};
//vao permanecer os elementos do set1 que estão presentes no set2 porque estou a filtrar (intersetar) e não a unir

//Vou usar o set do ex1 ("umSet") e o set do ex2 ("outroSet")
console.log(intersetarSets(umSet, outroSet)); //Output: Set { 1 }

//Ex4
let randomArray = [11, 11, 22, 22, 33, 44, 44, 99];
const eliminarElemDuplicados = (array) => {
  let set = new Set([...array]);
  return set;
};

console.log(eliminarElemDuplicados(randomArray)); //Output: Set { 11, 22, 33, 44, 99 }

//Ex5
const Carro = function (Marca, Matricula, Cor, Km, Consumo) {
  (this.marca = Marca),
    (this.matricula = Matricula),
    (this.cor = Cor),
    (this.kilometros = Km),
    (this.consumo = Consumo);
};

//Familia1
let carroPai = new Carro("Tesla - Model S", "XX-99-XX", "Azul", 100000, 0);
let carroMae = new Carro("Tesla - Model Y", "XX-98-XX", "Preto", 10000, 0);
let carroFilho = new Carro("Tesla - Model 3", "XX-97-XX", "Ver", 90000, 0);
let carroFilha = new Carro("Tesla - Model 3", "XX-96-XX", "Cinz", 300, 0);

//Familia2
let carroAvoo = new Carro("Tesla-CyberTruck", "XX-95-XX", "Azul", 5000, 0);
let carroAvo = new Carro("Tesla - Model X", "XX-94-XX", "Preto", 200, 0);
let carroNeto = new Carro("Tesla - Roadster", "XX-93-XX", "Ver", 10, 0);
let carroNeta = new Carro("Tesla - Semi", "XX-92-XX", "Cinz", 400, 0);

//até aqui apenas criámos os objetos "carro"
//agora vamos criar os dois sets, cada um com os carros da respetiva familia
let Familia1 = new Set([carroPai, carroMae, carroFilho, carroFilha]);
let Familia2 = new Set([carroAvoo, carroAvo, carroNeto, carroNeta]);

//agora vamos criar a função que junta os carros das duas familias
let todosOsCarros = (set1, set2) => {
  let todos = new Set([...set1, ...set2]);
  return todos;
};

console.log(todosOsCarros(Familia1, Familia2));

//Ex6
//PROVAVELMENTE HÁ MANEIRAS MAIS SIMPLES DE FAZER ISTO BUT... Who cares... nunca se vai usar isto ¯\_(ツ)_/¯
const Aluno = function (Nome, Numero, Morada, Ucs, Media) {
  (this.nome = Nome),
    (this.numero = Numero),
    (this.morada = Morada),
    (this.disciplinas = Ucs),
    (this.media = Media);
};

let aluno1 = new Aluno("Ana", 1, "Aveiro", ["Português", "Matemática"], 13);
let aluno2 = new Aluno("Beto", 2, "Aveiro", ["Português", "Matemática"], 20);
let aluno3 = new Aluno("Carlos", 3, "Aveiro", ["Português", "Matemática"], 9);
let aluno4 = new Aluno("Daniel", 4, "Aveiro", ["Português", "Matemática"], 12);
let aluno5 = new Aluno("Emanuel", 5, "Aveiro", ["Português", "Matemática"], 15);
//até aqui apenas criámos os objetos "aluno"

let TurmaA = new Map();
TurmaA.set(0, aluno1);
TurmaA.set(1, aluno2);
TurmaA.set(2, aluno3);
TurmaA.set(3, aluno4);
TurmaA.set(4, aluno5);

const melhorMedia = (map) => {
  let array = [];
  map.forEach((value, key) => {
    //Vai correr todos os valores no Map e armazenar todas as medias num array
    array = [...array, value.media]; //isto mantem os valores anteriores do array e adiciona mais um elemento
    //No final do forEach o array vai ser: [ 13, 20, 9, 12, 15 ]
  });
  let indexDaMaiorMedia = array.indexOf(Math.max(...array));
  //Agora vamos ver qual é o meio valor nesse array (a melhor media) e obter o index desse valor. Neste caso, a melhor média é 20 por isso o index vai ser 1 (porque 20 está na segunda posição do array).
  //Como as keys do Map começam em 0, o index da média maior vai corresponder automaticamente ao aluno selecionado
  return map.get(indexDaMaiorMedia); //retornamos o valor associado à key 1 do Map, neste caso o objeto Aluno (aluno2) que é o Beto
};
console.log(melhorMedia(TurmaA));

//Output: Aluno{nome:"Beto",numero:2,morada:"Aveiro",disciplinas:["Português","Matemática"],media:20}

//Ex7
//Well... a cena dos weakSet's e dos weakMap's é uma questão de poupança de memória e poder de processamento.
//Nestes exemplos que escrevemos pouco ou nada notamos diferença, mas para aplicações grandes, a poupança de memória do browser pode fazer a diferença entre a página carregar rapidamente ou não. Sinceramente... não vejo o porquê de estarmos a aprender isto agora... é só para termos a noção que isto existe i think... na prática não vamos usar isto a menos que seja numa fase de optimização da aplicação ou wtv. Mas para quem quiser ler sobre esta questão:
//https://www.mattzeunert.com/2017/01/31/weak-maps.html
