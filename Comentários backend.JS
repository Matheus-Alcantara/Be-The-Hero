const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end;
 * POST: Criar uma informação no back-end;
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end.
 */

/**
  * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação);
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Mcrisoft SQL Server;
 * NoSQL: MongoDB, CouchDB, etc.
 */

 /**
  * Driver: Select * FROM users
  * Query Builder: table('users').select('*').where()
  */

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        Evento: 'Semana Oministack 11.0',
        Aluno: 'Matheus Amorim'
    });
});

app.listen(3333);
