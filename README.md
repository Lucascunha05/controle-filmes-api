.

🎬 FECAF Flix API
📖 Descrição
A FECAF Flix API é uma aplicação back-end desenvolvida para gerenciar e disponibilizar informações sobre filmes de um acervo. Utilizando o padrão MVC (Model-View-Controller) e a arquitetura RESTful, a API permite listar todos os filmes, buscar filmes por ID e filtrar filmes por nome ou sinopse.

⚙️ Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.

Express: Framework para construção da API.

Prisma ORM: Ferramenta para interação com o banco de dados MySQL.

MySQL: Sistema de gerenciamento de banco de dados relacional.

📁 Estrutura do Projeto
plaintext
Copiar
Editar
fecef-flix-api/
├── src/
│   ├── controllers/
│   │   └── filmeController.js
│   ├── models/
│   │   └── filmeModel.js
│   ├── routes/
│   │   └── filmeRoutes.js
│   ├── services/
│   │   └── filmeService.js
│   └── app.js
├── prisma/
│   └── schema.prisma
├── .env
├── package.json
└── README.md

📦 Instalação
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/fecef-flix-api.git
cd fecef-flix-api
Instale as dependências:

bash
Copiar
Editar
npm install
Configure as variáveis de ambiente no arquivo .env:

env
Copiar
Editar
DATABASE_URL="mysql://usuario:senha@localhost:3306/db_controle_filmes"
Execute as migrações do Prisma:

bash
Copiar
Editar
npx prisma migrate dev --name init
Inicie o servidor:

bash
Copiar
Editar
npm start
O servidor estará disponível em http://localhost:3000.


🧪 Endpoints da API
1. Listar todos os filmes
Método: GET

Rota: /v1/controle-filmes/filme

Descrição: Retorna uma lista de todos os filmes cadastrados no banco de dados.

2. Buscar filme por ID
Método: GET

Rota: /v1/controle-filmes/filme/:id

Parâmetros:

id: ID do filme a ser buscado.

Descrição: Retorna os detalhes de um filme específico pelo seu ID.

3. Filtrar filmes por nome ou sinopse
Método: GET

Rota: /v1/controle-filmes/filtro/filme?nome=<termo>

Parâmetros:

nome: Termo a ser pesquisado no nome ou sinopse dos filmes.

Descrição: Retorna uma lista de filmes que contêm o termo pesquisado no nome ou na sinopse.

📸 Exemplo de Resposta
GET /v1/controle-filmes/filme/1

json
Copiar
Editar
{
  "id": 1,
  "nome": "O Poderoso Chefão",
  "duracao": "02:55",
  "sinopse": "Um épico da máfia que segue a história da família Corleone.",
  "dataLancamento": "1972-03-24T00:00:00.000Z",
  "fotoCapa": "https://example.com/poderoso_chefao.jpg"
}
🧪 Testes com Postman
Após implementar a API, teste os seguintes endpoints utilizando o Postman:

Listar todos os filmes:

Método: GET

URL: http://localhost:3000/v1/controle-filmes/filme

Buscar filme por ID:

Método: GET

URL: http://localhost:3000/v1/controle-filmes/filme/1

Filtrar filmes por nome:

Método: GET

URL: http://localhost:3000/v1/controle-filmes/filtro/filme?nome=poderoso

📝 Licença
Este projeto está licenciado sob a MIT License.

