require('dotenv').config();
const { Client } = require('pg');


const isProduction = process.env.NODE_ENV === 'production';

const client = new Client({
  user: isProduction ? process.env.DB_CLOUD_USER : process.env.DB_LOCAL_USER,
  host: isProduction ? process.env.DB_CLOUD_HOST : process.env.DB_LOCAL_HOST,
  database: isProduction ? process.env.DB_CLOUD_NAME : process.env.DB_LOCAL_NAME,
  password: isProduction ? process.env.DB_CLOUD_PASSWORD : process.env.DB_LOCAL_PASSWORD,
  port: isProduction ? process.env.DB_CLOUD_PORT : process.env.DB_LOCAL_PORT,
});

client.connect()
  .then(() => console.log(isProduction ? 'Conectado ao banco na nuvem' : 'Conectado ao banco local'))
  .catch(err => console.error('Erro de conexão', err));

module.exports = client;  

  
