const numns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobro = (n) => n * 2;

console.log(numns.map(dobro));

const nomes = ['Diego', 'Gabriel', 'Lucas'];
const primeiraLetra = (nome) => nome[0];

const letras = nomes.map(primeiraLetra);

console.log(letras);
