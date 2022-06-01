"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const api_1 = __importDefault(require("./api/api"));
const server = http_1.default.createServer(api_1.default);
const onError = () => {
};
//# sourceMappingURL=server.js.map