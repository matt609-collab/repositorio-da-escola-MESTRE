const livros = require("./JSON/listaLivros.json").livrosBiblioteca;

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(`O livro mais barato (que é ${livros[maisBarato].titulo}) custa: ${livros[maisBarato].preco}`);