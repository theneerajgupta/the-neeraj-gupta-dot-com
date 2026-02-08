import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;