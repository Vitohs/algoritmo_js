let array = [2,5,6,8,9]
let soma = 0
let multi = 4
let i = 0

while(i < array.length)
{
    soma = soma + array[i]
    i++
}

let resutado = soma * multi
console.log("a soma do array deu: " + soma + " multiplicando por: " + multi + " dara o resultado: " + resutado)