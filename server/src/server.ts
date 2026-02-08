import app from "./app";
import type { Request, Response } from 'express';
import './config';

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`[ server ] running on port https://localhost:${PORT}`);
})

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'server is active',
        port: PORT
    })
})