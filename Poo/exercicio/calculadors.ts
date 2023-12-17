class Calculadora { 

    private resultado : number = 0;
    

    private somar (numerador: number, multiplicador: number){
        this.resultado =+ numerador + multiplicador;
    }
    subtrair (numerador: number, multiplicador: number){
        this.resultado =+ numerador - multiplicador;
    }
    multiplicar (numerador: number, multiplicador: number){
        this.resultado =+ numerador * multiplicador;
    }
    dividir (numerador: number, multiplicador: number){
        this.resultado =+ numerador / multiplicador;
    }

    public get getResultadoSoma(): number{
        return this.resultado
    }

    
}

const teste = new Calculadora();

// teste.somar(10,10)
// teste.subtrair(10,10)
// teste.dividir(10,10)
teste.multiplicar(10,10)


console.log(teste.getResultadoSoma);
