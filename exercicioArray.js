let mahoraga = ["almoço", "paz","guerra","São Paulo","Perdão","Vontade","ansiedade","analogia","artista"]

function kk(array)
{
    return mahoraga.filter(palavra => palavra.startsWith('a') || palavra.startsWith('A'))
}
console.log(kk(mahoraga))