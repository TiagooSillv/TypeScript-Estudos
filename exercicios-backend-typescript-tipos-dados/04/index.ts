const gerarCodigo = (peca:{produto: string, lote: number, ano:number , qtd : number})
: string=>{
    var retorno:string = '';
    for (let i = 0; i < peca.qtd; i++) {
    
        var quantidade:string = String(i + 1).padStart(3, '0');
        
        retorno += `${peca.lote}.${peca.ano}.${quantidade} \n`
    }

    return retorno;
}

console.log(gerarCodigo({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 10
}));


