// yes sir ninja de jau voltou vamos brincar
class Impressao
{
    constructor()
    {
        this.oie = []
    }

    AdicionarImpressao(sasuke) 
    {
        this.oie.push(sasuke)  
    }
    // usa nao papai deu bolote aqui kkkk coé
    // resolvi pode usar já
    ver()
    {
        if(this.oie.length == 0)
        {
            console.log("quer ver oq aqui loco")
            return;
        }
        var j = this.oie.length
        var i = 0
        while(i < j)
        {
           console.log(this.oie[i])
           i++
        }
    }

    Impremir()
    {
        if(this.oie.length == 0)
        {
            console.log("Tem nada aqui papis")
            return;
        }
        let starrk = this.oie.shift()
        console.log("certo, voce acabou de impremir o documento: "+ starrk)
    }
}
let corsa = new Impressao()
corsa.AdicionarImpressao("RG E CPF")
corsa.AdicionarImpressao("CNH")
corsa.ver()
corsa.Impremir()