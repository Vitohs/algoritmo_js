function transporMatriz(matriz) 
{
    let transposta = []
    for (let i = 0; i < matriz[0].length; i++) 
    {
        transposta[i] = []
        for (let j = 0; j < matriz.length; j++) 
        {
            transposta[i][j] = matriz[j][i]
        }
    }
    return transposta
}

let matriz = 
[
    [1, 2],
    [3, 4]
]

let matrizTransposta = transporMatriz(matriz)
console.log(matrizTransposta)