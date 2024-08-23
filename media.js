console.log("oii");
let notaum = parseFloat(prompt("oii, digite a primera ae sir:"));
let notadois = parseFloat(prompt("agora a segunda: "));

let media = (notaum + notadois) / 2;

console.log("Sua média é: " + media);

if (media >= 8.5) {
    console.log("boa, sua menção é A");
} else if (media >= 7.5 && media < 8.5) {
    console.log("boa, sua menção é B");
} else if (media >= 6 && media < 7.5) {
    console.log("boa, sua menção é C, ok");
} else if (media >= 5 && media < 6) {
    console.log("Menção D oloco");
} else {
    console.log("F, ai nao po");
}
