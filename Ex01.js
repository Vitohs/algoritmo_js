class Soma
{
    constructor()
    {
        this.oi = []
    }

    insert(valor)
    {
        if(valor >=0)
        {
            this.oi.push(valor)
        }
    }

    somarr()
    {
        let somar = 0
        let i = 0
        let j = this.oi.length
        while(i < j)
        {
            somar = parseInt(somar) + parseInt(this.oi[i])
            i++
        }
        console.log("O resutado da soma deu: " + somar)
    }

    vizualize(obj)
    {
        console.table(obj)
    }
}

let sp = new Soma()

sp.insert(22)
sp.insert(10)
sp.insert(94)
sp.insert(80)
sp.insert(62)
sp.insert(44)
sp.insert(55)
sp.insert(11)
sp.insert(21)
sp.insert(39)

sp.vizualize(sp)

sp.somarr()