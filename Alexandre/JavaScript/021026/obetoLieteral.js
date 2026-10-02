const user = {
    nome: "Scaramal",
    email: "matheus@gmail.com",
    nascimento: "2000-01-01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

user.exibirInfos();