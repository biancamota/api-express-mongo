import express from "express";
import connectionDb from "./config/connection.js";
import routes from "./routes/index.js";

const conn = await connectionDb();

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', () => {
    console.log('Database connected');
})

const app = express();
routes(app);

export default app;