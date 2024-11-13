let array = [10,20,33,35]
let par = 0
let inpar = 0
let i = 0
while(i < array.length)
{
    if(array[i] % 2 == 0)
    {
        par++
    }
    else
    {
        inpar++
    }
    i++
}
//aqui vai bater certinho 2/2, só para controle de tempo
console.log("o array possui: " + par + " e " + inpar + " numeros impares")