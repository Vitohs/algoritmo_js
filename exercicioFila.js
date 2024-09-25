class Mercado
{
    constructor()
    {
        this.fila = []
    }

    AddCliente(cliente)
    {
        this.fila.push(cliente)
    }
    AtenderCliente()
    {
        if(this.fila.length === 0)
        {
            console.log("Tem ninguem aqui fio")
            return
        }
        let coyote = this.fila.shift()
        console.log("oii, o Cliente : " + coyote + " foi atentido, bom trabalho")
    }
}

let jauserve = new Mercado()


jauserve.AddCliente("Victor")
jauserve.AddCliente("Fafá")
jauserve.AddCliente("Yuri-san")

jauserve.AtenderCliente()
jauserve.AtenderCliente()
jauserve.AtenderCliente()
jauserve.AtenderCliente()