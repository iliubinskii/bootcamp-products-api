import path from "path";
import fs from "fs";
import cors from "cors";
import express from "express";
import { renderProductsList } from "./renderProductsList";

const appSsr = express();

appSsr.use(cors());

appSsr.get("/", (req, res) => {
  const catList = getProductsList(req.params.id);
  res.send(renderPage(renderCategoriesList(catList)));
});

const __dirname = path.resolve(path.dirname(""));

appSsr.get("/categories/:id", (req, res) => {
  productsList = getProductsList(req.params.id);
  res.send(renderPage(renderProductsList(productsList)));
});

appSsr.get("/cart", (req, res) => {
  productsList = getProductsList(req.params.id);
  res.send(renderPage(renderCart()));
});

appSsr.get("/client.js", (req, res) => {
  res.sendHeader("Content-Type", "text/javascript");
  res.sendFile(path.join(__dirname, "client.js"));
});

appSsr.get("/create-product", (req, res) => {
  res.sendHeader("Content-Type", "text/javascript");
  res.json({ id });
});

export default appSsr;
