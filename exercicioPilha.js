class Pilha
{
    constructor()
    {
        this.pilha = []
    }
 AddAction(acao)
{
    this.pilha.push(acao)
    console.log('Açao adicionada: ' + acao)
}
 DeleteAction()
{
    if(this.pilha.length === 0)
    {
        console.log("Nada pra tirar aqui irmão")
        return
    }
  let ultimo = this.pilha.pop()
  console.log('Ação desfeita: ' + ultimo)
}
}

let oi = new Pilha()
oi.AddAction("Votar no bolsonaro")
oi.AddAction("Rebolar para os cria")
oi.AddAction("Votar no LULA")

oi.DeleteAction()


