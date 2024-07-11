# Sistema de Oportunidades 👩🏾‍💻💼

## Descrição

O Sistema de Oportunidades é uma API desenvolvida para ajudar pessoas de baixa renda a conseguirem emprego, estágio, cursos gratuitos e apoio do governo com bolsas. O objetivo é centralizar diversas oportunidades em um só lugar, facilitando o acesso a essas informações valiosas.

## Funcionalidades

- **Inserir uma nova vaga**
- **Listar todas as vagas**
- **Buscar vagas por tipo**
- **Buscar vagas de apoio**
- **Excluir uma vaga por ID**

## Tecnologias Utilizadas

   - Node.js
   - Express
   - Postman (para testes)

## Como Rodar o Projeto

### Pré-requisitos

   - Node.js instalado na máquina
   - Postman para testar a API

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/oportunidades.git

2. **Instale as dependências**

Navegue até a pasta do projeto e execute o comando:
  ```bash
  cd oportunidades
```
 ```bash
 npm install
```
3. **Inicie o servidor**

   Execute o comando abaixo para iniciar o servidor:

 ```bash
npm run dev
```
   - O servidor estará rodando na porta 3000.

# Endpoints da API

1. **Inserir uma Nova Vaga**
- Método: POST
- URL: http://localhost:3000/vagas
- Body (JSON)
 ```bash
{
  "tipo": "curso",
  "titulo": "Curso de Node.js",
  "descricao": "Curso completo de Node.js.",
  "link": "https://cursos.com/nodejs"
}
```
2. **Listar Todas as Vagas**
    - Método: GET
    - URL: http://localhost:3000/vagas

3. **Buscar Vagas por Tipo**
   - Método: GET
   - URL: http://localhost:3000/vagas/tipo/:tipo
   - Parâmetro: tipo (ex: curso, estágio, apoio)
  
4. **Buscar Vagas de Apoio**
   - Método: GET
   - URL: http://localhost:3000/vagas/apoio

5. **Excluir uma Vaga por ID**
   - Método: DELETE
   - URL: http://localhost:3000/vagas/:id
   - Parâmetro: id (ex: 1, 2, 3)

# Testando com Postman
   - Inserir uma Nova Vaga
1. **Crie uma nova requisição**

   - Método: POST
   - URL: http://localhost:3000/vagas

2. **Configurar o BodY**

   - Vá para a aba "Body"

   - Selecione "raw"

   - No menu suspenso, selecione "JSON"

  - Insira o JSON com os dados da nova vaga:

```bash
{
  "tipo": "curso",
  "titulo": "Curso de Node.js",
  "descricao": "Curso completo de Node.js.",
  "link": "https://cursos.com/nodejs"
}
```

3. **Enviar a Requisição**

   - Clique no botão "Send"
  
# Listar Todas as Vagas
1. **Crie uma nova requisição**

   - Método: GET
   - URL: http://localhost:3000/vagas
  
2.  **Enviar a Requisição**
   - Clique no botão "Send"
  
# Buscar Vagas por Tipo
1. **Crie uma nova requisição**

   - Método: GET
   - URL: http://localhost:3000/vagas/tipo/curso (ou outro tipo como estágio, apoio)
  
2. **Enviar a Requisição**

   - Clique no botão "Send"
  
# Buscar Vagas de Apoio
1. **Crie uma nova requisição**

   - Método: GET
   - URL: http://localhost:3000/vagas/apoio
  
2. **Enviar a Requisição**

   - Clique no botão "Send"
  
# Excluir uma Vaga por ID
1. **Crie uma nova requisição**

   - Método: DELETE
   - URL: http://localhost:3000/vagas/1 (substitua 1 pelo ID desejado)
  
2. **Enviar a Requisição**

   - Clique no botão "Send"

# Contribuindo
1- Faça um fork do projeto

2- Crie uma branch para sua feature (git checkout -b feature/nova-feature)

3- Commit suas mudanças (git commit -m 'Adiciona nova feature')

4- Faça o push para a branch (git push origin feature/nova-feature)

5- Abra um Pull Request
