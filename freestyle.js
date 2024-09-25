let nmr = [10, 70, 99, 77, 44, 900, 76, 69, 22, 13];
let n = nmr.length;
let ii = 0;

// Calcula a soma dos elementos do vetor
for (let i = 0; i < n; i++) 
{
  ii += nmr[i];
}
// 0  1  2  3  4  5   6  7  8  9
// 10 70 99 77 44 900 76 69 22 13
for (let i = 0; i < n - 1; i++) 
{
  //cria uma variavel (j) para dar sequencia a comparação
  for (let j = 0; j < n - i - 1; j++) 
  {
    // se j atual for maior que o proximo..
    if (nmr[j] > nmr[j + 1]) 
    {
      //auxiliar recebe atual
      let aux = nmr[j];
      //atual recebe o proximo
      nmr[j] = nmr[j + 1];
      nmr[j + 1] = aux;
    }
  }
}
console.log(nmr);
console.log("A soma de tudo deu " + ii);