const prompt = require('readline-sync')

const idade = Number(prompt.question('Qual eh a sua idade?'));

// const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional? if/else

if (idade >= 18) {
    //faça alguma coisa...
    console.log("Voce eh maior de idade!");
} else {
    console.log("Voce eh menor de idade");
}

const mediaAluno = 9;

if (mediaAluno >= 7) {
    console.log("Aprovado!");
} else if (mediaAluno >= 5) {
    console.log("Recuperação final")
}
else {
    console.log("Reprovado!");
}

const idadePessoa = 18;
const temCNH = true;

if(idade >=18 && temCNH){
    console.log("Voce pode dirigir");
}else{
    console.log("Voce não pode dirigir");
}