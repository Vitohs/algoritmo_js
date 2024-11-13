let frutas = ["maçã", "banana", "maçã", "laranja"];
let contagemFrutas = {};
for (let i = 0; i < frutas.length; i++) 
{
    let fruta = frutas[i];
    
    if (contagemFrutas[fruta]) 
    {
        contagemFrutas[fruta]++;
    } 
    else 
    {
        contagemFrutas[fruta] = 1;
    }
}

console.log(contagemFrutas)
