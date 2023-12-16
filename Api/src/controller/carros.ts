import {Request, Response} from 'express'
import { knex } from '../database/conexao'
import { Carros } from '../tipos';
export const listarCarros = async (req : Request , res:Response) =>{
    try {
        const listaCarros = await knex<Carros>('carros');
    
        return res.status(200).json(listaCarros)
    } catch (error) {
        console.log(error);
        res.status(500).json({mensagem: 'Erro no servidor'})
        
    }

}
export const atualizarCarros = async (req : Request , res:Response) =>{
    const {id} = req.params;
    const { marca ,modelo, ano, cor, valor} = req.body;

    try {
        const newUser = { marca,modelo, ano,cor,valor }
        
        const updateCar = await knex<Carros>('carros').update(newUser).where({id : Number(id) });

        return res.status(201).json({mensagem : 'O Carro foi atualizado com sucesso!'})

    } catch (error) {
        
        return res.status(500).json({mensagem : 'Error interno no servidor'})
    }

}
export const detalharCarros = async (req : Request , res:Response) =>{
    const {id} = req.params;

    try {
        
        const carros = await knex('carros').where({id : Number(id)}).first();

        
        if (!carros) {
            return res.status(404).json({mensagem : 'Carro não foi encontrado!'})
        }

        return res.status(200).json(carros)
    } catch (error) {
        
        return res.status(500).json({mensagem : 'Error interno no servidor'})
    }

}
export const excluirCarros = async (req : Request , res:Response) =>{
    const {id} = req.params;

    try {
        
        const deleteCar = await knex('carros').delete().where({id : Number(id)}).returning('*')
        
        if (deleteCar.length < 0) {
            return res.status(404).json({mensagem : 'Carro não foi encontrado!'})
        }

        return res.status(200).json(deleteCar)
    } catch (error) {
        
        return res.status(500).json({mensagem : 'Error interno no servidor'})
    }
}
export const cadastrarCarros = async (req : Request , res:Response) =>{
    const {marca, modelo, ano, cor, valor} = req.body;

    try {
        console.log(req.body);
        
        const inserirCarro = await knex<Omit<Carros, 'id'>>('carros').insert({marca, modelo, ano, cor, valor}).returning('*');

        return res.status(201).json(inserirCarro);

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({mensagem : 'Erro interno no servidor!'})
    }
}