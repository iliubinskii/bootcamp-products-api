import express from 'express';
import userRouters from './users/routes.js';
import productsRouter from './products/routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouters);
app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
