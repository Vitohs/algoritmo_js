let array = [1,5,3,9]
let i = 0
let maior = 0

while(i < array.length)
{
    if(i === 0)
    {
        maior = array[i]
    }
    if(array[i] > maior)
    {
        maior = array[i]
    }
    i++
}
console.log("O numero maior é: " + maior)