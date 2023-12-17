type Dados = {
    nome : string
    idade : number
    nomePai : string
    nomeMae : string
}

class Pessoas {
    private nome : string = 'Tiago'
    private idade : number = 24
    private nomePai : string = 'Osvaldinato'
    private nomeMae : string = 'Adriana'

    verificarIrmao(pessoa : Dados):boolean{
        if (pessoa.nomeMae === this.nomeMae) {
            if (pessoa.nomePai == this.nomePai) {
                return true;
            }
        }
        return false;    
    }
    verificarSeEhMaior (pessoa: Dados):boolean{
        if (pessoa.idade > this.idade) {
            return true
        }else{
            return false
        }
    }
}

const pessoinha : Dados = {
    nome : 'Diego',
    idade : 10,
    nomePai : 'Osvaldinato',
    nomeMae : 'Adriana',
}

const verifi = new Pessoas()
console.log(verifi.verificarIrmao(pessoinha));
console.log(verifi.verificarSeEhMaior(pessoinha));

