let idAutomatico = 1;
export class Vagas{
    constructor(tipo, titulo, descricao, link){
        this.id = idAutomatico++;
        this.tipo = tipo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.link = link;
    }
}