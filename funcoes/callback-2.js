const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

console.log(caminho);

function exibirConteudo(err, conteudo) {
  if (err) {
    console.log(err);
  } else {
    console.log(conteudo.toString());
  }
}

console.log('inicio');
fs.readFile(caminho, exibirConteudo);
console.log('Fim');

console.log('inicio sync');
const couteudo = fs.readFileSync(caminho);
console.log(couteudo.toString());
console.log('Fim sync');
