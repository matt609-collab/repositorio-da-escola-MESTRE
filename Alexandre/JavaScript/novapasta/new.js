/*function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

function Admin(role){
    User.call(this, 'Scaramal', 'Scaramal@scaramal.scaramal')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)
*/

//const novoUser = new User('Scaramal', 'Scaramal@scaramal.scaramal')
//console.log(novoUser.exibirInfos)

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = Object.create(user)
novoUser.init('Scaramal', 'Scaramal@scaramal.scaramal')
console.log(novoUser.exibirInfos())