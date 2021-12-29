Array.prototype.meuReduce = function (callback, valorInicial) {
  let acumulador = valorInicial;
  for (let i = 0; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const array = [1, 2, 3, 4, 5];
const soma = (total, valor) => total + valor;

const resultado = array.meuReduce(soma, 10);
console.log(resultado);
