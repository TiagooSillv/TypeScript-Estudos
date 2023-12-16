"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarCarros = exports.excluirCarros = exports.detalharCarros = exports.atualizarCarros = exports.listarCarros = void 0;
const conexao_1 = require("../database/conexao");
const listarCarros = async (req, res) => {
    try {
        const listaCarros = await (0, conexao_1.knex)('carros');
        return res.status(200).json(listaCarros);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: 'Erro no servidor' });
    }
};
exports.listarCarros = listarCarros;
const atualizarCarros = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        const newUser = { marca, modelo, ano, cor, valor };
        const updateCar = await (0, conexao_1.knex)('carros').update(newUser).where({ id: Number(id) });
        return res.status(201).json({ mensagem: 'O Carro foi atualizado com sucesso!' });
    }
    catch (error) {
        return res.status(500).json({ mensagem: 'Error interno no servidor' });
    }
};
exports.atualizarCarros = atualizarCarros;
const detalharCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const carros = await (0, conexao_1.knex)('carros').where({ id: Number(id) }).first();
        if (!carros) {
            return res.status(404).json({ mensagem: 'Carro não foi encontrado!' });
        }
        return res.status(200).json(carros);
    }
    catch (error) {
        return res.status(500).json({ mensagem: 'Error interno no servidor' });
    }
};
exports.detalharCarros = detalharCarros;
const excluirCarros = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCar = await (0, conexao_1.knex)('carros').delete().where({ id: Number(id) }).returning('*');
        if (deleteCar.length < 0) {
            return res.status(404).json({ mensagem: 'Carro não foi encontrado!' });
        }
        return res.status(200).json(deleteCar);
    }
    catch (error) {
        return res.status(500).json({ mensagem: 'Error interno no servidor' });
    }
};
exports.excluirCarros = excluirCarros;
const cadastrarCarros = async (req, res) => {
    const { marca, modelo, ano, cor, valor } = req.body;
    try {
        console.log(req.body);
        const inserirCarro = await (0, conexao_1.knex)('carros').insert({ marca, modelo, ano, cor, valor }).returning('*');
        return res.status(201).json(inserirCarro);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor!' });
    }
};
exports.cadastrarCarros = cadastrarCarros;
