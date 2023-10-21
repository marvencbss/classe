const rl = require('readline-sync');

class Pessoa {
    Nome
    Email
    Idade

    set nome(novoNome) {
            this.Nome = novoNome;
    }

    set email(novoEmail) {
        this.Email = novoEmail;
    }

    set idade(novoIdade) {
        this.Idade = novoIdade;
    }

    get nome() {
        return this.Nome;
    }

    get email() {
        return this.Email;
    }

    get idade() {
        return this.Idade;
    }

    respondeNome() {
        return `Oi! ${this.nome}!`;
    }

    respondeEmail() {
        return `Seu email é ${this.email}!`;
    }

    respondeIdade() {
        return `Sua idade é ${this.idade}!`;
    }
}

let novaPessoa = new Pessoa();

const valorNome = rl.question('Qual seu nome? ');
const valorEmail = rl.question('Qual seu email? ');
const valorIdade = rl.question('Qual sua idade? ');

console.log(`Bem vindo ${nome}.`);
console.table(novaPessoa);