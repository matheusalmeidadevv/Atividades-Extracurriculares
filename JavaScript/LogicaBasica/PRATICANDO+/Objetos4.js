/*
Crie do zero (sem array pronto pra copiar):

Monte um array com pelo menos 4 funcionários, cada um com nome, salario e departamento
Calcule e imprima a média salarial
Imprima só os funcionários do departamento "TI"
Adicione um novo funcionário diretamente no push
Imprima o maior salário do array
*/

const funcionarios =[

    {nome: "Carlos", salario: 2000, departamento: "Administração"},
    {nome: "Jose", salario: 3000, departamento: "Logistica"},
    {nome: "Roberto", salario: 4750, departamento:"TI"},
    {nome: "Alice", salario: 5000, departamento:"TI"}

]

let mediasalario = 0;
let maiorsalario = {nome: "", salario: 0, departamento: ""};

for(let funcionario of funcionarios){

    mediasalario += funcionario.salario;

}

mediasalario = mediasalario / funcionarios.length;
console.log(`Media salarial da empresa: ${mediasalario}`);

for(let funcionario of funcionarios){
    
    if(funcionario.departamento === "TI"){
        
        console.log(`Nome do funcionario de TI: ${funcionario.nome} `)

    }

}

funcionarios.push({nome: "Matheus", salario: 5500, departamento: "TI"});

for(let funcionario of funcionarios){
    
    if(funcionario.salario > maiorsalario.salario){
        
        maiorsalario = funcionario;

    }
    
}

console.log(`Nome do funcionario com maior salario: ${maiorsalario.nome} `)