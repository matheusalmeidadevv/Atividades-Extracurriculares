/*
Imprima o nome do jogador com mais gols (sem usar nenhum método pronto de array — só loop e if)
Imprima a média de gols do time
Imprima apenas os jogadores que fizeram mais de 3 gols
*/

const jogadores = [
    {nome: "Matheus", gols: 5},
    {nome: "João", gols: 3},
    {nome: "Pedro", gols: 8},
    {nome: "Lucas", gols: 1}
];

let craque = {nome: "", gols: 0};
let mediagols = 0;


for(let jogador of jogadores){
    
    if(craque.gols < jogador.gols){
       
        craque = jogador;
    }

    mediagols += jogador.gols;
    
}
mediagols = mediagols / jogadores.length; 

console.log(`Jogador com mais gols: ${craque.nome}, Quantidade de gols: ${craque.gols}\nA media de gols foi ${mediagols}\n`);


console.log("Esses jogadores tem mais de 3 gols");
for(let jogador of jogadores){

    if(jogador.gols > 3){

        console.log(`${jogador.nome}`);
    }

}