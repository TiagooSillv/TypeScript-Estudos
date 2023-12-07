const soletrando = (nome:string): string =>{
    return nome.split('').join('-');
}

console.log(soletrando('programador'));
