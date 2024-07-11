import { Vagas } from "../models/oportunidades.model.js";

let listaVagas = [];


export const inserindoVagas = (tipo, titulo, descricao, link) =>{
   let vaga = new Vagas(tipo, titulo, descricao, link);
    listaVagas.push(vaga);
    return vaga;

}

export const retotnarVagas = () =>{
    return listaVagas
}

export const buscarApoio = (apoio) =>{
    return listaVagas.filter(({tipo}) => tipo == 'apoio')
}

export const buscarPorTipo = (tipoVaga) =>{
    return listaVagas.filter(({tipo}) => tipo == tipoVaga)
}


export const excluirVaga =(id) =>{
    const index = listaVagas.findIndex(procurar => procurar.id === id);
    if (index === -1) return null;

    const vagaExcluida = listaVagas.slice(index, 1)
    return vagaExcluida[0]
}