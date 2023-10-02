import express from "express";
import BookController from "../controllers/BookController.js";

const routes = express.Router();

routes.get("/books", BookController.index);

routes.get("/books/search", BookController.findByCategory);

routes.post("/books", BookController.create);

routes.get("/books/:id", BookController.show);

routes.put("/books/:id", BookController.update);

routes.delete("/books/:id", BookController.delete);

export default routes;