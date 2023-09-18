import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dbConfig from './config/dbConfig';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

mongoose
  .connect(dbConfig.dbConnString, {
    dbName: dbConfig.dbName,
  })
  .then(() => {
    console.log('Conexão com o MongoDB Atlas estabelecida');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
  });


const port = dbConfig.port;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});