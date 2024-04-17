import express from 'express';
//import userRouters from './users/routes.js';

const app = express();
app.use(express.json());

//app.use('/api', userRouters);

export default app;
