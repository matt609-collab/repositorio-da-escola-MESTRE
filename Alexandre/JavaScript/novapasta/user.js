class User{
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Scaramal', 'scaramal@scaramal.com', '2024-06-06')
console.log(novoUser)
console.log(novoUser.exibirInfos())