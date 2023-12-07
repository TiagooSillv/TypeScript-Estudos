
const gerarTabuada = (numeros:number[])=>{
    for (const numero of numeros) {

        for (let index = 0; index < 11; index++) {
            console.log(`${numero} X ${index} = ${numero * index}`);
               
        }
        console.log('----------------------------------------------');
        
    }
    
}

console.log(gerarTabuada([5,10,20]));
