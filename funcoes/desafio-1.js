function calcular(a) {
  return (b) => {
    return (calc) => {
      if (typeof calc === 'function') {
        return calc(a, b);
      }
      console.log('Função de execução não encontrada');
    };
  };
}

function somar(a, b) {
  return a + b;
}

function dividir(a, b) {
  return a / b;
}
function multiplicar(a, b) {
  return a * b;
}

function potencia(a, b) {
  return Math.pow(a, b);
}
console.log(calcular(1)(2)(somar));
console.log(calcular(10)(2)(dividir));
console.log(calcular(10)(2)(multiplicar));
console.log(calcular(2)(10)(potencia));
