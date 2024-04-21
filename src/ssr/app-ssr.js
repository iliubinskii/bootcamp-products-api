import path from "path";
import cors from "cors";

import express from "express";
import { renderHomePage } from "./render/homePage.js";
import getProductsList from "./utils/getProducts.js";
import getCategoriesList from "./utils/getCategoriesList.js";
import createRequestId from "../global-middleware/request-id.js";
import getRequestLogger from "../global-middleware/log-request.js";
import { ssrLogger } from "../logger.js";

const appSsr = express();

appSsr.use(cors());
appSsr.use(createRequestId);
appSsr.use(getRequestLogger(ssrLogger));

appSsr.get("/", async (req, res) => {
  const categories = await getCategoriesList();

  const products = await getProductsList();
  res.send(renderHomePage({ categories: categories, products: products }));
});

appSsr.get("/categories/:id", async (req, res) => {
  const { categoryId } = req.params;
  const products = await getProductsList(categoryId);
  const categories = await getCategoriesList();
  res.send(renderHomePage({ categories: categories, products: products }));
});

appSsr.all("*", (req, res) => {
  res.status(404).send("Not found");
});

appSsr.use((err, req, res, next) => {
  ssrLogger.error(err, { requestId: req.requestId });
  res.status(500).send("Internal Server Error");
});

export default appSsr;
