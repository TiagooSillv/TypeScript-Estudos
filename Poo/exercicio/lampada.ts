class Lampada { 
    private potencia : number = 100;
    private lampada : boolean = false; 


    private ligarLampada(){
        this.lampada = true;
    }
    private desligarLampada(){
        this.lampada = false;
    }

    public set ligar(status : boolean){
        this.ligarLampada()
    }
    public set desligar(status : boolean){
        this.desligarLampada()
    }
    public get getPotencia():number{
        return this.potencia
    }
}

const action = new Lampada()

console.log(action.getPotencia);
