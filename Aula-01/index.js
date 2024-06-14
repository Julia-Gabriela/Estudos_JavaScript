//possui tipagem dinamicca: infere os tipos de dados
//Possui uma tipagem fraca

var nome = 'Julia Gabriela';  // string(texto): sempre usar ""
var idade = 27; // number
var altura = 1.77; //number
var estudante = true //boolean (verdadeiro ou falso)

console.log(nome, typeof nome);

console.log(idade,typeof idade);

console.log(altura, typeof altura);

console.log(estudante, typeof estudante);

var semConteudo; //declarando uma variavel

console.log(semConteudo);

var curso = 'Front-end em react', topico = 'JavaScript Basico I';

console.log(curso,topico);

// Não utiliza o var nos codigos JavaScript

let notaAluno = 10;
const mediaAluno = 8;

notaAluno = 9;
// mediaAluno = 5; Não e permitido

console.log(notaAluno);
console.log(mediaAluno);
