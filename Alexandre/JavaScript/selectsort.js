const livros = require("./JSON/listaLivros.json").livrosBiblioteca;
const menorValor = require("./menorValor")


for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor[livros, atual];

    let livroAtual = livros[atual];
    console.log('livro Atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro com menor preço', livros[menor])

}

console.log(livros);