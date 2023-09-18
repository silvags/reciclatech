import dotenv from 'dotenv';

dotenv.config({path: 'config.env'}); // Carrega as variáveis de ambiente do arquivo .env

const dbConfig = {
  dbConnString: process.env.DB_CONN_STRING || '', // Use process.env para carregar a string de conexão do .env
  dbName: process.env.DB_NAME || 'pevsDB',
  pevsCollectionName: process.env.PEVS_COLLECTION_NAME || 'pevs',
  port: process.env.PORT || 5000,
};

export default dbConfig;

