//Ex1
class Ponto2D {
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
  addXY(maisX, maisY) {
    this.x += maisX;
    this.y += maisY;
  }
  //Ex1 ---------------------------------------------------------------------
  calcDist(p1) {
    let distancia = Math.sqrt(
      (p1.x - this.x) * (p1.x - this.x) + (this.y - p1.y) * (this.y - p1.y)
    );
    return distancia;
  }
  //--------------------------------------------------------------------------
  //Ex2-----------------------------------------------------------------------
  static calcularDistancia(umPonto, outroPonto) {
    let distancia = Math.sqrt(
      (umPonto.x - outroPonto.x) * (umPonto.x - outroPonto.x) +
        (outroPonto.y - umPonto.y) * (outroPonto.y - umPonto.y)
    );
    return distancia;
  }
  //----------------------------------------------------------------------------
  //Ex5-----------------------------------------------------------------------
  static calcPontoMedio(umPonto, outroPonto) {
    let cordX = (umPonto.x + outroPonto.x) / 2;
    let cordY = (umPonto.y + outroPonto.y) / 2;
    let pontoMedio = new Ponto2D(cordX, cordY);
    return pontoMedio;
  }
  //----------------------------------------------------------------------------
}
//Ex1 ---------------------------------------------------------------------
let ponto1 = new Ponto2D(1, 1);
let ponto2 = new Ponto2D(1, 2);
ponto1.calcDist(ponto2); //Output: 1
//----------------------------------------------------------------------------

//Ex2--------------------------------------------------------------------------
//Usando os mesmos pontos de cima:
Ponto2D.calcularDistancia(ponto1, ponto2); //Output: 1
//----------------------------------------------------------------------------

//Ex3
class Ponto3D extends Ponto2D {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  static calcularDistancia(umPonto, outroPonto) {
    let distancia = Math.sqrt(
      (umPonto.x - outroPonto.x) * (umPonto.x - outroPonto.x) +
        (umPonto.y - outroPonto.y) * (umPonto.y - outroPonto.y) +
        (umPonto.z - outroPonto.z) * (umPonto.z - outroPonto.z)
    );
    return console.log(distancia);
  }
  calcDistCentro() {
    let distancia = Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z
    );
    return console.log(distancia);
  }
  addXYZ(maisX, maisY, maisZ) {
    this.x += maisX;
    this.y += maisY;
    this.z += maisZ;
    return console.log(this);
  }
}
let ponto3 = new Ponto3D(1, 1, 1);
let ponto4 = new Ponto3D(1, 2, 1);

Ponto3D.calcularDistancia(ponto3, ponto4); //Output: 1
ponto3.calcDistCentro(); //Output: 1.7320508075688772
ponto3.addXYZ(1, 1, 0); //Output: Ponto3D { x: 2, y: 2, z: 1 }

//Ex4
let cordY = 0;
let somatorioDist = 0;
let pontos = [];

for (let index = 0; index < 10; index++) {
  cordY += 5;
  pontos[index] = new Ponto2D(1, cordY);
  if (index > 0) {
    somatorioDist += pontos[index].calcDist(pontos[index - 1]);
  }
}

console.log(pontos);
/*Output: 
[
  Ponto2D { x: 1, y: 5 },
  Ponto2D { x: 1, y: 10 },
  Ponto2D { x: 1, y: 15 },
  Ponto2D { x: 1, y: 20 },
  Ponto2D { x: 1, y: 25 },
  Ponto2D { x: 1, y: 30 },
  Ponto2D { x: 1, y: 35 },
  Ponto2D { x: 1, y: 40 },
  Ponto2D { x: 1, y: 45 },
  Ponto2D { x: 1, y: 50 }
] 
*/
console.log(somatorioDist); //Output: 45

//Ex5 (Ver class Ponto2D)
//Usando o ponto 1 e 2 no 1ºex:

console.log(Ponto2D.calcPontoMedio(ponto1, ponto2)); //Output: Ponto2D { x: 1, y: 1.5 }

//Ex6
class Circulo extends Ponto2D {
  constructor(centroX, centroY, raio) {
    super(centroX, centroY), (this.raio = raio);
  }
  get area() {
    return Math.PI * this.raio * this.raio;
  }
  get perimetro() {
    return 2 * Math.PI * this.raio;
  }
}
let circulo1 = new Circulo(0, 0, 5);
console.log(circulo1); //Output: Circulo { x: 0, y: 0, raio: 5 }
console.log(circulo1.perimetro); // Output:31.41592653589793
console.log(circulo1.area); // Output:78.53981633974483

//Ex7
//Após rever este código, cheguei à conclusão que sou retardado :D 
//Podem ser retardados como eu e fazer desta maneira ou simplesmente definir os parametros de entrada como sendo o comprimento e a largura do retângulo :_)
class Retanculo {
  constructor(p1, p2, p3, p4) {
    //Para verificar que as coordenadas formam um retângulo:

    //Primeiro encontrar o centro das coordenadas inseridas
    let centroX = (p1.x + p2.x + p3.x + p4.x) / 4;
    let centroY = (p1.y + p2.y + p3.y + p4.y) / 4;

    let centro = new Ponto2D(centroX, centroY);

    //Depois verificar se a distância desse centro a cada vértice é igual para todos os pontos
    let d1 = Ponto2D.calcularDistancia(centro, p1);
    let d2 = Ponto2D.calcularDistancia(centro, p2);
    let d3 = Ponto2D.calcularDistancia(centro, p3);
    let d4 = Ponto2D.calcularDistancia(centro, p4);

    //Se as ditâncias forem iguais, quer dizer que é u retângulo e crio o mesmo com os devidos vertices
    if (d1 == d2 && d2 == d3 && d3 == d4) {
      this.vertices = [p1, p2, p3, p4];
      this.vertices.sort((a, b) => (a.x == b.x ? b.y - a.y : a.x - b.x));
      //Desta forma sabemos a ordem dos vertices no array, idependentemente da ordem em que eles são inseridos:
      /*
      0: Vertice Superior Esquerdo
      1: Vertice Inferior Esquerdo
      2: Vertice Superior Direito
      3: Vertice Inferior Direito
      */
      this.comprimento = Ponto2D.calcularDistancia(
        this.vertices[0],
        this.vertices[2]
      );
      this.largura = Ponto2D.calcularDistancia(
        this.vertices[0],
        this.vertices[1]
      );
    } else {
      //Se não, crio uma propiedade chamada erro
      this.erro = "As coordenadas inseridas não formam um retângulo";
    }
  }
  get area() {
    return this.comprimento * this.largura;
  }

  get perimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
}

let pontoCimaEsq = new Ponto2D(0, 3);
let pontoBaixoEsq = new Ponto2D(0, 1);
let pontoCimaDir = new Ponto2D(1, 3);
let pontoBaixoDIr = new Ponto2D(1, 1);

let retangulo1 = new Retanculo(
  pontoCimaEsq,
  pontoBaixoEsq,
  pontoCimaDir,
  pontoBaixoDIr
);
console.log(retangulo1);
/*Output: 
Retanculo {
  vertices: [
    Ponto2D { x: 0, y: 3 },
    Ponto2D { x: 0, y: 1 },
    Ponto2D { x: 1, y: 3 },
    Ponto2D { x: 1, y: 1 }
  ],
  comprimento: 1,
  largura: 2
}
*/
console.log(retangulo1.area); //Output: 2
console.log(retangulo1.perimetro); //Output: 6

//Ex8
//Esta pergunta tem mais de Matemática que JS, .... anyway:
/*Um poligono pode ser regular ou irregular e não podendo garantir que os pontos que vêm no array estão ordenados 
(sentido do relógio ou ao contrário) temos que arranjar forma de os ordenar.
Para isso encontrei esta solução online baseada no angulo de cada ponto em relação ao centro:
https://stackoverflow.com/questions/45660743/sort-points-in-counter-clockwise-in-javascript
*/
class Poligono {
  constructor(arrayDePontos) {
    this.pontos = arrayDePontos;
  }
  get perimetro() {
    //Primeiro temos que encontrar o Centro do Poligono
    //Então fazemos ordenamos o array em x e em ythis.pontos.sort((a, b) => a.y - b.y);
    let centroY =
      (this.pontos[0].y + this.pontos[this.pontos.length - 1].y) / 2;

    this.pontos.sort((a, b) => a.x - b.x);
    let centroX =
      (this.pontos[0].x + this.pontos[this.pontos.length - 1].x) / 2;

    let centroPoligono = new Ponto2D(centroX, centroY);

    let anguloInicial;
    this.pontos.forEach((ponto) => {
      var ang = Math.atan2(
        ponto.y - centroPoligono.y,
        ponto.x - centroPoligono.x
      );

      if (!anguloInicial) {
        anguloInicial = ang;
      } else {
        if (ang < anguloInicial) {
          ang += Math.PI * 2;
        }
      }
      ponto.angulo = ang;
    });

    //Depois de todos os pontos terem um angulo atribuido, vamos ordenar por angulo
    this.pontos.sort((a, b) => a.angulo - b.angulo);

    let perimetro = 0;

    for (let i = 0; i < this.pontos.length + 1; i++) {
      //Calcular a distância entre os pontos do array
      if (i > 0 && i != this.pontos.length) {
        perimetro += Ponto2D.calcularDistancia(
          this.pontos[i],
          this.pontos[i - 1]
        );
      }
      //Calcular a distância do último ponto ao primeiro
      if (i == this.pontos.length) {
        perimetro += Ponto2D.calcularDistancia(
          this.pontos[i - 1],
          this.pontos[0]
        );
      }
    }
    return perimetro;
  }
}
let p1 = new Ponto2D(0, 0);
let p2 = new Ponto2D(0, 1);
let p3 = new Ponto2D(1, 0);
let p4 = new Ponto2D(1, 1);
let pontosPoligono = [p1, p2, p3, p4];
let pol = new Poligono(pontosPoligono);

console.log(pol.perimetro); //Output: 4
