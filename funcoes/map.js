// Implementando o meu próprio map

Array.prototype.meuMap = function (callback) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i], i, this));
  }
  return novoArray;
};

const carrinho = {
  nome: 'Carrinho de Compras',
  valor: 8,
  produtos: [
    { nome: 'Caneta', preco: 1.99, quantidade: 10 },
    { nome: 'Caderno', preco: 3.99, quantidade: 5 },
    { nome: 'Lapis', preco: 0.99, quantidade: 3 },
    { nome: 'Tesoura', preco: 2.99, quantidade: 1 },
  ],
};

function somenteNomes(produto) {
  return produto.nome;
}

function desconto(produto, indice, array) {
  return {
    nome: produto.nome,
    preco: parseFloat(produto.preco * 0.9).toFixed(2),
    posicao: indice + 1,
    de: array.length,
  };
}

function total(produto) {
  return (
    parseFloat(produto.preco * produto.quantidade).toFixed(2) +
    ' - ' +
    produto.nome
  );
}

// desconto
const resultado = carrinho.produtos.meuMap(desconto);

console.log(resultado);

// somente nomes
const resultado2 = carrinho.produtos.map(somenteNomes);

console.log(resultado2);

// total
const resultado3 = carrinho.produtos.map(total);
console.log(resultado3);
