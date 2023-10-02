import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.index);

routes.post("/authors", AuthorController.create);

routes.get("/authors/:id", AuthorController.show);

routes.put("/authors/:id", AuthorController.update);

routes.delete("/authors/:id", AuthorController.delete);

export default routes;