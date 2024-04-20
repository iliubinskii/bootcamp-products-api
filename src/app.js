import express from "express";
import userRouters from "./users/routes.js";
import productsRouter from "./products/routes.js";

const app = express();
app.use(express.json());

app.use("/users", userRouters);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/categories/:id", (req, res) => {
  // TODO - show products that belong to the category with the given id
});

app.get("/users/:id/products", (req, res) => {
  // TODO - show products added to the cart of the user with the given id
});

export default app;
