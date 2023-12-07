const buscarUsuario = ( pesquisa: string ) =>{
    const usuarios: {nome:string, idade:number, status: boolean} [] = [
        {
            nome: "Tiago",
            idade: 32,
            status: true,
        },
        {
            nome: "Tiago",
            idade: 32,
            status: true,
        },
        {
            nome: "Tiago",
            idade: 32,
            status: true,
        },
        {
            nome: "Tiago",
            idade: 32,
            status: true,
        },
    ]

    const filtrarUser = usuarios.filter((user)=>{
        return user.nome.toLowerCase().includes(pesquisa.toLowerCase())
    });

    return filtrarUser;
    
}

console.log(buscarUsuario('Tiago'));
