const somar = (...numbers) => {
  let soma = 0;
  for (let number of numbers) {
    if (typeof number === 'number') {
      soma += number;
    } else {
      return `${number} não é um número`;
    }
  }
  return soma;
};

const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somar(arrayDeNumeros));
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
