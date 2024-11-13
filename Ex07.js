let array = [10,20,30]
let filtro = []
let i = 0
while(i < array.length)
{
    if(array[i] > 15)
    {
        filtro.push(array[i])
    }
    i++
}
console.log("Os valores maiores que 15 são: " + filtro)