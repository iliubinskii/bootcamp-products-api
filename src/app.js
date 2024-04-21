import express from "express";
import userRouters from "./users/routes.js";
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

app.use("/users", userRouters);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.json({ ok: new Date().toDateString(), uuid: req.requestId });
});

export default app;
