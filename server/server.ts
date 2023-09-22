import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/pevRoutes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect( 'mongodb+srv://userapp:0HkZ6Qmb2frU9Ysw@cluster0.rvoavj4.mongodb.net/?retryWrites=true&w=majority', {
    dbName: 'pevsDB',
  })
  .then(() => {
    console.log('Conexão com o MongoDB Atlas estabelecida');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
  });

app.use(routes);

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});