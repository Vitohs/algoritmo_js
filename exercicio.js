let receba = [11, 2, 8, 119, 8, 767];
let soma = 0;
let i = 0;
let j = receba.length;

while (i < j) {
    if (receba[0] % 2 === 0) {
        let vito = receba.shift(); // Remove o primeiro elemento e armazena em vito
        soma += vito; // Soma o valor de vito
        receba.push(vito); // Adiciona vito de volta ao final do array
    } else {
        receba.shift(); // Remove o primeiro elemento se for ímpar
    }
    i++;
}

console.log(receba); // [2, 8, 8]
console.log(soma);   // 1