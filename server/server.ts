import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('./routes', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});


export default app;