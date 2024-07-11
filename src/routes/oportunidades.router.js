import { Router } from "express";
import { inserindoVagas, retotnarVagas, buscarApoio, buscarPorTipo, excluirVaga } from "../controllers/oportunidades.controller";

const vagaRouter = Router()

vagaRouter.post("/vagas", (req, res) =>{
    const {tipo, titulo, descricao, link} = req.body;
    const novaVaga = inserindoVagas(tipo,titulo,descricao,link);
    res.json({novaVaga})
})

Router.length("/vagas", (req, res)=>{
    const listaVaga = retotnarVagas()
    res.json({listaVaga})
})

Router.get('/vagas/tipo/:tipo', (req, res)=>{
    const tipoVaga = req.params.tipo;
    res.json(buscarPorTipo(tipoVaga))
})