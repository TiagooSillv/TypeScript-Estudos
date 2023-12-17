type Produto =  { 
    descricao : string,
    valor: number,
    quantidade: number
}

class Fatura {
    private transacao : Produto[];
    private cliente : string;
    private fatura : number;

    constructor(nome : string){
        this.cliente = nome;
        this.transacao = [];
        this.fatura = 0;
    }

    adicionarCompra(produto: Produto){
        this.transacao.push(produto);
    }
    fecharFatura():string[]{
        const total = this.transacao.map((produto)=>{

            this.fatura += produto.quantidade * (produto.valor / 100)

            return `${produto.quantidade} - ${produto.descricao} (R$${produto.valor / 100} = R$ ${produto.quantidade * (produto.valor / 100)})`
        })
        return total
    }
    pegarTotalFatura(){
        return this.fatura;
    }

}

const produto : Produto = {
    descricao : 'Notebook',
    quantidade : 2,
    valor : 99900
}
const produto2 : Produto = {
    descricao : 'Tablet',
    quantidade : 1,
    valor : 100000
}


const cliente = new Fatura('Tiago')

cliente.adicionarCompra(produto);
cliente.adicionarCompra(produto2);

console.log(cliente.fecharFatura());
console.log(cliente.pegarTotalFatura());

