class Web
{
    constructor()
    {
        this.gojo = []
    }
    
    NavergarPara(adicionaralgo)
    {
        this.gojo.push(adicionaralgo)
        console.log("Estamos no site " + adicionaralgo)
    }
    voltar()
    {
        if(this.gojo.length == 0)
        {
            console.log("ae mol ae mol, ei matheus gonçalves")
            return;
        }
        this.gojo.pop()
        let derek = this.gojo[this.gojo.length - 1];
        console.log("Voltamo pra pagina anterior a pagina " + derek)
    }
}
let vivi = new Web()
vivi.NavergarPara("aviao sem asa fogueira sem brasa")
vivi.NavergarPara("youtube")
vivi.NavergarPara("portal 2")
vivi.voltar()
vivi.voltar()
vivi.voltar()