import express from "express";
import userRouter from "./users/routes.js";
import categoriesRouter from "./categories/routes.js";
import productsRouter from "./products/routes.js";
import cors from "cors";
import createRequestId from "./global-middleware/request-id.js";
import getRequestLogger from "./global-middleware/log-request.js";
import logger from "./logger.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(createRequestId);
app.use(getRequestLogger(logger));

app.use("/categories", categoriesRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.json({ ok: new Date().toDateString(), uuid: req.requestId });
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err, req, res, next) => {
  logger.error(err, { requestId: req.requestId });
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
