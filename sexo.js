let nomes = [];
let sexos = [];
let salarios = [];
i = 1;
let media,mediamas,mediafem = 0;
let contmasc,contfem,conterro = 0;

// so pra controle esse até 3
for (i; i <= 3 ; i++)
{
      nomes[i] = prompt("digite um nome: ");
      sexo[i] = prompt("digite o sexo m/f");
      salarios[i] = prompt("digite o salario");
}
i = 1;

for(i; i <= 3 ; i++)
{
    if (sexos[i] == "m" || sexos[i] == "M");
    {
        contmasc = contmasc +1;
        mediamas = salarios[i] + mediamas;
    }
    
    if (sexos[i] == "f" || sexos[i] == "F");
    {
        contfem  = contfem +1;
        mediafem = salarios[i] + mediafem;
    }     
}

if (contmasc != 0)
    {
        mediamas = mediamas / contmasc;
    }
if (contfem != 0)
    {
        mediafem = mediamas / contfem;
    }
    
    console.log("a media salarial de mulheres é de: " + mediafem);
    console.log("a media salarial de homens é de: ",mediamas);