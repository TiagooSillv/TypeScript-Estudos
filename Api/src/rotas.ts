import {Router} from "express";
import{listarCarros, detalharCarros, excluirCarros, atualizarCarros, cadastrarCarros} from './controller/carros'

const rotas = Router();

rotas.get('/',listarCarros);
rotas.get('/detalhar/:id',detalharCarros);
rotas.put('/atualizar/:id',atualizarCarros);
rotas.delete('/delete/:id',excluirCarros);
rotas.post('/add',cadastrarCarros);



export default rotas;