import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import BlogRouter from './routers/blog.routes'

const app = express();

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/blog", BlogRouter)

export default app;