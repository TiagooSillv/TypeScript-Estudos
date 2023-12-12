const fs = require('fs');

const lerArquivo = (): unknown =>{

    return JSON.parse(fs.readFileSync('./01/bd.json')) 
    
}

const escreverArquivo = (dados:any ) =>{
    fs.writeFileSync('./01/bd.json',JSON.stringify(dados) )
}

type Endereco = {

    cep : string,
    rua : string,
    complemento? : string,
    cidade : string,
    
}
type Usuario = {
    nome : string,
    email : string,
    cpf : string,
    profissao? : string,
    endereco : Endereco
}
const cadastrarUsuario = (user : Usuario) =>{
    
    var arquivo = lerArquivo() as Usuario[];
    arquivo.push(user)

    const bd = escreverArquivo(arquivo);

    return user;    
}
const usuario: Usuario = {
    nome : 'Tiago',
    email : 'tiago@email',
    cpf : '0',
    profissao: 'Programador',
    endereco : {
        cep : '000000',
        rua : 'rua',
        cidade : 'linhares',
    }
}

const buscarUser = (cpf:string):Usuario =>{
    const usuario = lerArquivo() as Usuario[];
    const usuarioSelecionado =  usuario.find((user)=>{
        return user.cpf === cpf;
    })
    if (!usuarioSelecionado) {
        throw new Error ('Usuario não encontrado')
    }
    return usuarioSelecionado
    
}
const atualizarUser = (user:Usuario) =>{
    const usuarios = lerArquivo() as Usuario[];
    
    const posicaoUsuario = usuarios.findIndex((usuario)=>{
        return user.cpf === usuario.cpf;
    })
    usuarios.splice(posicaoUsuario, 1, user);
    
    return escreverArquivo(usuarios);
    
}
const deleteUser = (cpf : string): Usuario =>{
    const usuarios = lerArquivo() as Usuario[];
    
    const posicaoUsuario = usuarios.findIndex((usuario)=>{
        return cpf === usuario.cpf;
    })
    const user = usuarios.find((usuario)=>{
        return cpf === usuario.cpf;
    })
    if (!user) {
        throw new Error ('O usuario não foi encontrado!')
    }
    
    usuarios.splice(posicaoUsuario, 1);

    escreverArquivo(usuarios);
    
    return user ;
    
}

const filtrarProfissao = (profissao: string): Usuario[]=>{
    const usuarios = lerArquivo() as Usuario[];
    
    const user = usuarios.filter((usuario)=>{
        return profissao === usuario.profissao;
    })
    if (!user) {
        throw new Error ('O usuario não foi encontrado!')
    }
        
    return user ;
}


console.log(filtrarProfissao('Manicure'));


// console.log(cadastrarUsuario(usuario));


// console.log(deleteUser('000'));

// console.log(cadastrarUsuario(usuario));


// console.log(atualizarUser({
//     nome : 'Lila',
//     email : 'Tiago@email',
//     cpf : '000',
//     profissao: 'Manicure',
//     endereco : {
//         cep : '000-000',
//         rua : 'rua',
//         cidade : 'linhares',
//     }
// }));

