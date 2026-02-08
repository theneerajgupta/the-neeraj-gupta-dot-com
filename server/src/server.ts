import app from "./app";
import type { Request, Response } from "express";
import "./config";

const PORT = process.env.PORT || 8000;
const PUBLIC_URL =
    process.env.PUBLIC_URL?.replace(/\/$/, "") || "http://localhost";

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        message: "server is active",
        port: PORT,
    });
});

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "production") {
        console.log(`[server] ${PUBLIC_URL}:${PORT}`);
        return;
    }

    console.log(`[server] ${PUBLIC_URL} (internal port ${PORT})`);
});
