/*Criar uma pilha vazia chamada historicoTexto.

Adicionar (empilhar) 3 ações de digitação sequenciais: "Digitou: Olá", "Digitou: Olá, mundo" e "Digitou: Olá, mundo!!!".

Imprimir qual é a ação que está no topo da pilha (a última digitada) sem removê-la (operação Peek).

Executar a ação de "Desfazer" (desempilhar) duas vezes seguidas. A cada vez que desempilhar, imprima na tela: "Desfazendo a ação: [texto da ação]".

Imprimir o estado atual da pilha após os dois desfazimentos para ver o que sobrou no histórico.
*/

const historicoTexto = [];
historicoTexto.push("Olá", "Olá Mundo", "Olá Mundo!!!");

console.log(`Digitou: ${historicoTexto[2]}`);

console.log(`Desfazendo a ação: ${historicoTexto.pop()}`);
console.log(`Desfazendo a ação: ${historicoTexto.pop()}`);

console.log(`${historicoTexto}`);