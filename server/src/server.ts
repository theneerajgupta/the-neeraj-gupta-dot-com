import app from "./app";
import type { Request, Response } from 'express';
import './config';

const PORT = process.env.PORT || 8000;

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'server is active',
        port: PORT
    })
})

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "production") {
        console.log(`[server] http://localhost:${PORT}`);
    } else {
        console.log(`[server] running (production)`);
    }
})