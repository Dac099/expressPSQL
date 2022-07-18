//Realizamos las conexiones a la base de datos
const { Client} = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'dac',
    password: 'Espuma22',
    database: 'my_store',
  });

  await client.connect();

  return client;
}

module.exports = getConnection;
