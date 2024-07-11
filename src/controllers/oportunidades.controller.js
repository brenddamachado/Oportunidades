import { Vagas } from "../models/oportunidades.model.js";

let listaVagas = [
  new Vagas('apoio', 'Auxílio Desemprego', 'Benefício financeiro para desempregados.', 'https://apoio.com/auxilio-desemprego'),
  new Vagas('apoio', 'Bolsa de Estudos', 'Bolsa de estudos para cursos de capacitação.', 'https://apoio.com/bolsa-estudos'),
  new Vagas('estágio', "Desenvolvedor web", 'Vaga para estagiario do 3º período em diante', 'https://www.gupy.io/'),
  new Vagas('curso', 'Pacote Office', 'Curso de pacote office gratuito.', 'https://www.rj.senac.br/'),
];

export const inserindoVagas = (tipo, titulo, descricao, link) => {
  let vaga = new Vagas(tipo, titulo, descricao, link);
  listaVagas.push(vaga);
  return vaga;
};

export const retotnarVagas = () => {
  return listaVagas;
};

export const buscarApoio = () => {
  return listaVagas.filter(({ tipo }) => tipo == 'apoio');
};

export const buscarPorTipo = (tipoVaga) => {
  return listaVagas.filter(({ tipo }) => tipo == tipoVaga);
};

export const buscarPorId = (id) => {
  return listaVagas.find(vaga => vaga.id === id);
};

export const excluirVaga = (id) => {
  const index = listaVagas.findIndex(procurar => procurar.id === id);
  if (index === -1) return null;

  const vagaExcluida = listaVagas.splice(index, 1);
  return vagaExcluida[0];
};
