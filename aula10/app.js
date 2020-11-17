//Ex2
function dividir(numerador, denominador) {
  try {
    if (denominador == 0) {
      throw new Error("Denominador não pode ser 0");
    }
    return numerador / denominador;
  } catch (e) {
    console.log(e.message);
  }
}

dividir(1, 0);

//Ex3

function testarCodigoPostal(codPostal) {
  try {
    if (!/^\d{4}-\d{3}?$/.test(codPostal)) {
      throw new Error("Código Postal inválido");
    }
    console.log(codPostal);
  } catch (e) {
    console.log(e.message);
  }
}
testarCodigoPostal("5120-372"); // Output: 5120-372
testarCodigoPostal("5120"); //Output: Código Postal inválido

//Ex4
function morada(rua, numero, codigo) {
  try {
    if (typeof rua != "string") {
      throw new Error("Morada inválida ");
    }
    if (isNaN(numero)) {
      throw new Error("Numero inválido ");
    }

    if (!/^[0-9]{4}(?:-[0-9]{3})?$/.test(codigo)) {
      throw new Error("Códido Postal inválido ");
    }

    console.log("Morada válida " + rua + " " + numero + " " + codigo);
  } catch (e) {
    console.log(e.message);
  }
}

morada("abc", 34, "4410-021");

//Ex5

let inverter = (string) => {
  try {
    let resultado = string.split("").reverse().join("");
    console.log(resultado);
  } catch (e) {
    console.log(e.message);
  }
};

inverter(345); //Output: (erro) string.split is not a function

//Ex6
function verificar(ano, mes, dia) {
  try {
    let novadata = new Date(ano, mes, dia);

    //o método getTime da class Date retorna NaN se o formato da data não for válida, NaN é o único que quando é igualado a si próprio dá resultado falso. Por isso, se NaN != NaN é pq o formato está errado

    //A class date incrementa os dias e meses a mais que lhe são passados, por exemplo se passarmos o dia 32 de Dezembro, automaticamente a data fica dia 1 de Janeiro do ano seguinte. Para combater isto, igualo os valores que foram passados como parametros de entrada ao resultado, se forem iguais, significa que a data inserida está correta, se não, crio o erro

    if (novadata.getTime() !== novadata.getTime()) {
      throw new Error("Formato de data inválido");
    } else if (novadata.getFullYear() !== ano) {
      console.log(novadata.getFullYear());
      throw new Error("Ano inválido");
    } else if (novadata.getMonth() !== mes) {
      throw new Error("Combinação mês e dia inválida");
    } else if (novadata.getDate() !== dia) {
      throw new Error("Combinação mês e dia inválida");
    } else {
      var datavalidade = novadata; //Se a data for válida, datavalidade vai ser a data
    }
  } catch (e) {
    datavalidade = e.message; //Se a data for inválida, datavalidade a mensagem do erro
  } finally {
    return datavalidade; //Retorna datavalidade
  }
}

//Na class Date os meses do ano funcionam de 0 a 11 (0 sendo Janeiro e 11 Dezembro)

console.log(verificar(2020, 10, 17)); //Output: 2020-11-17T00:00:00.000Z (17 de Novembro de 2020)
console.log(verificar(2020, 1, 29)); //Output: 2020-02-29T00:00:00.000Z (29 de Fevereiro de 2020)
console.log(verificar(2019, 1, 29)); //Output: Combinação mês e dia inválida (Tentativa de 29 de Fevereiro de 2019 que não existe)
