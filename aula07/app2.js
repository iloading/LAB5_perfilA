class Ponto2D {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
  somarXY(addX, addY) {
    this.x += addX;
    this.y += addY;
  }
}

var ponto1 = new Ponto2D(0, 0);

ponto1.somarXY(0, 0);
console.log(ponto1);

//--------------------------------------------------

class segmento_reta {
  constructor(p1, p2) {
    (this.p1 = p1), (this.p2 = p2), (this.tamanho = this.calcDistancia());
  }
  calcDistancia() {
    let distancia = Math.sqrt(
      (this.p2.x - this.p1.x) * (this.p2.x - this.p1.x) +
        (this.p2.y - this.p1.y) * (this.p2.y - this.p1.y)
    );
    return distancia;
  }
}
let ponto2 = new Ponto2D(1, 0);
let seg1 = new segmento_reta(ponto1, ponto2);
console.log(seg1);

class Teste {
  constructor(nome, verbo) {
    this.nome = nome;
    this.verbo = verbo || "says";
  }
  falar(texto) {
    console.log(`${this.nome} ${this.verbo} '${texto}'`);
  }
}
class Shouter extends Teste {
  constructor(nome) {
    super(nome, "shouts");
  }
  falar(texto) {
    super.falar(texto.toUpperCase());
  }
}
new Shouter("Doutor").falar("Aqui");
