/*
Adicione um produto novo diretamente no push (sem variável intermediária)
Imprima o nome e preço de cada produto com for...of
Calcule e imprima o preço total de todos os produtos somados
*/

const produtos = [
    {nome: "Camiseta", preco: 49.90},
    {nome: "Calça", preco: 129.90},
    {nome: "Tênis", preco: 299.90}
];

let produtototal = 0;

produtos.push({nome: "Short Jeans", preco: 65.90});

/*
Você tambem pode criar o for...of sem declarar que a primeira variavel é uma variavel, escrevendo só o nome dela, por exemplo:
for(produto of produtos)
Mas isso torna essa variavel de escopo global gerando o mesmo problema que o var
E muitas vezes pode dar erro
*/
for(let produto of produtos){

    console.log(`Produto: ${produto.nome} ------ Preço: ${produto.preco}`);
    produtototal += produto.preco;
}

console.log(`\nPreço total: ${produtototal}`);


