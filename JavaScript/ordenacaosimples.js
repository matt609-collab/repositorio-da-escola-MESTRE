const livros = require("/workspaces/reposit-rio-da-escola-MESTRE/JSON/listaDeLivros.json");

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livro[maisBarato].preco){
        maisBarato = atual;
    }
};

console.log(`O livro mais barato custa: ${maisBarato.preco}`);