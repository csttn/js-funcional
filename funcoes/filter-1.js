Array.prototype.meuFilter = function (callback) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      novoArray.push(this[i]);
    }
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
    { nome: 'Mesa', preco: 100.99, quantidade: 1 },
  ],
};
const getNome = (produto) => produto.nome;

const somenteCanetas = (produto) => produto.nome === 'Caneta';
const resultado = carrinho.produtos.meuFilter(somenteCanetas);
console.log(resultado);

const produtosCaros = (produto) => produto.preco >= 100;
const resultado2 = carrinho.produtos.meuFilter(produtosCaros);
console.log(resultado2);

const produtosComQuantidade = (produto) => produto.quantidade >= 2;
const resultado3 = carrinho.produtos
  .meuFilter(produtosComQuantidade)
  .map(getNome);
console.log(resultado3);
