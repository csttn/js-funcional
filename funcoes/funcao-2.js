// Passar a função como parâmetro para outra função
function executar(fn) {
  if (typeof fn === 'function') {
    fn();
  }
  console.log(fn);
}

const executarA = function () {
  console.log('Executando A');
};

executar(executarA);
executar(4);

// 2 ) Retornar uma função a partir de outra função
function potencia(base) {
  return function (expoente) {
    return Math.pow(base, expoente);
  };
}

const potenciaDe2 = potencia(2);
// resultado da potecia de 2 elevado a 3
console.log(potenciaDe2(3));

// outra forma de passar o paremetro(expoente) para a função potencia
console.log(potencia(2)(3));

// usando arrow fucntion para passar o paremetro(expoente) para a função potencia

const potencia2 = (base) => (expoente) => Math.pow(base, expoente);

console.log(potencia2(2)(10));
