const readline = require('readline');

// Create a readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the Game class
class Game {
    // Constructor to initialize character properties
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Method to get character information and determine attack type
    getInfo() {
        let ataque;
        switch (this.tipo) {
            case 'magico':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido';
        }
        return {
            nome: this.nome,
            tipo: this.tipo,
            ataque: ataque
        };
    }

    // Method to simulate an attack
    atacar() {
        let tipo = this.getInfo();
        console.log(`O ${this.tipo} atacou usando ${tipo.ataque}`);
    }
}

// Prompt the user for character details
rl.question("Qual tipo de personagem você deseja criar? (magico, guerreiro, monge, ninja) ", (tipo) => {
    rl.question("Qual nome do personagem? ", (nome) => {
        rl.question("Qual a idade do personagem? ", (idade) => {
            const jogador1 = new Game(nome, idade, tipo);
            jogador1.atacar();
            rl.close();
        });
    });
});