//Ex1
class Ponto2D {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
  addXY(maisX, maisY) {
    this.x += maisX;
    this.y += maisY;
  }
}
let ponto = new Ponto2D(1, 2);
ponto.addXY(1, 1);
console.log(ponto); //Output: Ponto2D { x: 2, y: 3 }

//Ex2
class segmento_reta {
  constructor(p1X, p1Y, p2X, p2Y) {
    this.p1 = new Ponto2D(p1X, p1Y);
    this.p2 = new Ponto2D(p2X, p2Y);
    this.tamanho = this.calcularTamanho();
  }
  //calcular distancia entre 2 pontos: formula matematica d=√(x2−x1)^2+(y2−y1)^2
  calcularTamanho() {
    let distancia = Math.sqrt(
      (this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) +
        (this.p2.y - this.p1.y) * (this.p2.y - this.p1.y)
    );

    return distancia;
  }
}
let seg1 = new segmento_reta(2, 2, 4, 4);

console.log(
  seg1
); /*Output:  segmento_reta {p1: Ponto2D { x: 2, y: 2 }, p2: Ponto2D { x: 4, y: 4 }, tamanho: 2.8284271247461903}*/

console.log(seg1.calcularTamanho()); //Output: 2.8284271247461903

//Ex3
class Teste {
  constructor(nome, verbo) {
    this.nome = nome;
    this.verbo = verbo || "says";
    this.palavra = "something";
  }
  get falar() {
    return console.log(`${this.nome} ${this.verbo} '${this.texto}'`);
  }
  set palavra(value) {
    this.texto = value;
  }
}
class Shouter extends Teste {
  constructor(nome) {
    super(nome, "shouts");
  }
  get falar() {
    super.falar;
  }
  set palavra(value) {
    this.texto = value.toUpperCase();
  }
}
let a = new Teste("Doutor");
let b = new Shouter("Doutor");
console.log(a); //Teste { nome: 'Doutor', verbo: 'says', texto: 'something' }
console.log(b); //Shouter { nome: 'Doutor', verbo: 'shouts', texto: 'SOMETHING' }
a.falar; // Doutor says 'something'
b.falar; // Doutor shouts 'SOMETHING'
a.palavra = "Aqui";
a.falar; // Doutor says 'Aqui'
b.palavra = "Aqui já";
b.falar; // Doutor shouts 'AQUI JÁ'
