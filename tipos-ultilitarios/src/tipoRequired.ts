type Usuario = {
    nome: string,
    idade? : number,
    sexo : string
}
//Usamos o Required<Usuario> para poder obrigar a passar todos os dados de usuario mesmo que seja opcional mas tem que ser passado!
const cadastroDeUsuario = (user : Required<Usuario>) =>{
    return user;
}




//Usamos o Partial<Usuario> para poder passar os dados de usuario de forma parcial!
const cadastroDeUsuario2 = (user : Partial<Usuario>) =>{
    return user;
}

// const cliente: Usuario = {
//     nome: 'Tiago',
//     idade: 24,
//     sexo : 'masculino'
// }


//Usamos o Readonly para poder bloquear o usuario de editar qualquer informação!

const cliente: Readonly<Usuario> = {
    nome: 'Tiago',
    idade: 24,
    sexo : 'masculino'
}
// cliente.idade = 24;

console.log(cadastroDeUsuario2(cliente));
