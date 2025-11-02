function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) return "Erro: divisão por zero!";
  return a / b;
}

console.log("Soma:", soma(10, 5));
console.log("Subtração:", subtracao(10, 5));
console.log("Multiplicação:", multiplicacao(10, 5));
console.log("Divisão:", divisao(10, 5));

const calcularMedia = function (array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma / array.length;
};

const numeros = [2, 5, 8, 10, 13];
console.log("Média dos números:", calcularMedia(numeros));

const filtrarPares = (array) => array.filter(num => num % 2 === 0);
console.log("Números pares:", filtrarPares(numeros));

const dobrar = (array) => array.map(num => num * 2);
console.log("Números dobrados:", dobrar(numeros));

function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}

const resultadoCallback = executarOperacao(6, 3, multiplicacao);
console.log("Resultado com callback (multiplicação):", resultadoCallback);
