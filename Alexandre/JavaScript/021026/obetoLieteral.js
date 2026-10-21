const user = {
    nome: "Scaramal",
    email: "matheus@gmail.com",
    nascimento: "2000-01-01",
    role: "student",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Scaramal-pai",
    email: "jrScaramal@m.com",
    nascimento: "1980=01=01",
    role: "admin",
    ativo: true,
    criarCurso(){
        console.log('Curso criado');
    }
}

user.exibirInfos();

const exibir = function(){
    console.log([this.nome, this.email]);
}
exibir();

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();

const exibirNome = exibir.bind(user);
exibirNome();
exibirNome(user);

//user.exibirInfos();
//const exibirNome = exibir.bind(user);
