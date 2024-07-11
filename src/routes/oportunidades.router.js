import { Router } from 'express';
import {
  inserindoVagas,
  retotnarVagas,
  buscarApoio,
  buscarPorTipo,
  excluirVaga,
  buscarPorId
} from '../controllers/oportunidades.controller.js';

const router = Router();

router.post('/vagas', (req, res) => {
  const { tipo, titulo, descricao, link } = req.body;
  const novaVaga = inserindoVagas(tipo, titulo, descricao, link);
  res.json({ novaVaga });
});

router.get('/vagas', (req, res) => {
  const listaVaga = retotnarVagas();
  res.json({ listaVaga });
});

router.get('/vagas/apoio', (req, res) => {
  res.json(buscarApoio());
});

router.get('/vagas/tipo/:tipo', (req, res) => {
  const tipoVaga = req.params.tipo;
  res.json(buscarPorTipo(tipoVaga));
});

router.get('/vagas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vaga = buscarPorId(id);
  if (!vaga) {
    return res.status(404).send('Vaga não encontrada.');
  }
  res.json(vaga);
});

router.delete('/vagas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vagaExcluida = excluirVaga(id);
  if (!vagaExcluida) {
    return res.status(404).send('Vaga não encontrada.');
  }
  res.json(vagaExcluida);
});

export { router };
