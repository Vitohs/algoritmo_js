let item = [];
let vlrunit = [];
let qtd = [];
let total = [];

let controle = parseInt(prompt("Vai ser pra quantas pessoas essa resenha ai ?? "));
let pedido = parseInt(prompt("irmão quantos produtos voce deseja ?"))
for(let i; i <= pedido; i++)
{
    item[i] = prompt("Digite o que comprou");
    vlrunit[i] = prompt("Digite o valor do produto");
    qtd[i] = prompt("Digite a quantidade");
    console.clear();
    total[i] = (total[i] + qtd[i]) * vlrunit[i];
}

i == 1;
console.log("boa, essa resenha ai para " + controle + " pessoas, veja como vai ficar")
for(i; i <= pedido; i++)
{
    console.log("voce pediu" + item[i]);
    console.log("quantidade dele foi de: " + qtd[i]);
    console.log("o valor unitario desse item é de: ", vlrunit[i])
    console.log("quantia total dele foi: ", total[i])
    console.log(" ")
    media = media + total[i]
}

console.log("o custo total dessa brincadeira é de: " + media);
console.log("Cada um tera que desembolsar um valor de: ", media / controle)

