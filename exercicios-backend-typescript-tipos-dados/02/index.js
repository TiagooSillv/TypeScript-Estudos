var buscarUsuario = function (pesquisa) {
    var usuarios = [
        {
            nome: "Guido",
            idade: 32,
            status: true,
        },
    ];
    var filtrarUser = usuarios.filter(function (user) {
        return user.nome.toLowerCase().includes(pesquisa.toLowerCase());
    });
    return filtrarUser;
};
console.log(buscarUsuario('Tiago'));
