const leia = require('readline-sync');

let nA = leia.questionInt("Digite o numero A: ");
let nB = leia.questionInt("Digite o numero B: ");
let nC = leia.questionInt("Digite o numero C: ");

let soma = nA + nB;

if (soma > nC) {
    console.log(`${nA} + ${nB} = ${soma} > ${nC}`);
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < nC) {
    console.log(`${nA} + ${nB} = ${soma} < ${nC}`);
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log(`${nA} + ${nB} = ${soma} = ${nC}`);
    console.log("A Soma de A + B é Igual a C");
}