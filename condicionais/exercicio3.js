const leia = require('readline-sync');

let nome = leia.question("Digite o Nome do doador: ");
let idade = leia.questionInt("Digite a Idade do doador: ");
let primeiraDoacao = leia.keyInYNStrict("Primeira doacao de sangue? ");

if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && primeiraDoacao) {
        console.log(`${nome} não está apto para doar sangue!`);
    } else {
        console.log(`${nome} está apto para doar sangue!`);
    }
} else {
    console.log(`${nome} não está apto para doar sangue!`);
}