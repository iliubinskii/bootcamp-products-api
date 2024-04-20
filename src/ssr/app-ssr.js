import path from 'path';
import cors from 'cors';

import express from 'express';
import { renderHomePage } from './render/homePage.js';
import getProductsList from './utils/getProducts.js';
import getCategoriesList from './utils/getCategoriesList.js';

const appSsr = express();

appSsr.use(cors());

appSsr.get('/', async (req, res) => {
  //const categories = await getCategoriesList();
  const categories = [
    { id: 1, name: 'category 1' },
    { id: 2, name: 'category 2' },
  ];
  const products = await getProductsList();
  res.send(renderHomePage({ categories: categories, products: products }));
});

appSsr.get('/categories/:id', async (req, res) => {
  const { categoryId } = req.params;
  const products = await getProductsList(categoryId);
  const categories = await getCategoriesList();
  res.send(renderHomePage({ categories: categories, products: products }));
});

export default appSsr;
