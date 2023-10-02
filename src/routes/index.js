import express from "express";
import booksRoutes from "./bookRoutes.js";
import authorRoutes from "./authorRoutes.js";

const routes = (app) => {
    app.use(express.json(), 
        booksRoutes,
        authorRoutes
    );
};

export default routes;