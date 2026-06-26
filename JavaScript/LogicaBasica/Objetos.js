/*Crie um sistema simples de lista de alunos onde cada aluno é um objeto com nome e nota, e os alunos ficam num array:

Crie um array com pelo menos 3 alunos (cada um sendo um objeto com nome e nota)
Imprima o nome e nota de cada aluno usando for...of
Adicione um aluno novo no final da lista
Imprima a média das notas de todos os alunos*/

//Isso aqui é um array de objetos, é como se fosse um arraylist em JAVA
const alunos = [
    {nome: "Matheus", nota: 7},
    {nome: "Joao", nota: 8.5},
    {nome: "Jose", nota: 5}
];

//Criei um novo objeto para poder adicionar ele no objeto alunos    
let novoaluno = {nome: "Alef", nota: 10};

//Adicionei o novo objeto
alunos.push(novoaluno);

let nota_turma = 0;


for(let aluno of alunos){
    console.log(`Aluno: ${aluno.nome} Nota: ${aluno.nota}`);
    nota_turma += aluno.nota;
}



nota_turma = nota_turma / alunos.length;

console.log(`\n\nA media da turma foi: ${nota_turma}`);