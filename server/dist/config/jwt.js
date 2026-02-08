"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = signToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}
function signToken(payload, options) {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
        ...options,
    });
}
