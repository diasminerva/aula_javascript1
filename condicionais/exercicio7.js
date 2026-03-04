const leia = require('readline-sync');

let numero1 = leia.questionFloat("Digite o 1o numero: ");
let numero2 = leia.questionFloat("Digite o 2o numero: ");
let operacao = leia.questionInt("Operacao (1-Soma, 2-Subtracao, 3-Multiplicacao, 4-Divisao): ");

switch (operacao) {
    case 1:
        console.log(`${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${(numero1 + numero2).toFixed(1)}`);
        break;
    case 2:
        console.log(`${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${(numero1 - numero2).toFixed(1)}`);
        break;
    case 3:
        console.log(`${numero1.toFixed(1)} * ${numero2.toFixed(1)} = ${(numero1 * numero2).toFixed(1)}`);
        break;
    case 4:
        if (numero2 === 0) {
            console.log("Divisao por zero nao permitida!");
        } else {
            console.log(`${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${(numero1 / numero2).toFixed(1)}`);
        }
        break;
    default:
        console.log("Operação Inválida!");
}