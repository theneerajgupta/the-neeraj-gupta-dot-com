"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./config");
const PORT = process.env.PORT || 8000;
const PUBLIC_URL = process.env.PUBLIC_URL?.replace(/\/$/, "") || "http://localhost";
app_1.default.get("/", (_req, res) => {
    res.status(200).json({
        message: "server is active",
        port: PORT,
    });
});
app_1.default.listen(PORT, () => {
    if (process.env.NODE_ENV !== "production") {
        console.log(`[server] ${PUBLIC_URL}:${PORT}`);
        return;
    }
    console.log(`[server] ${PUBLIC_URL} (internal port ${PORT})`);
});
