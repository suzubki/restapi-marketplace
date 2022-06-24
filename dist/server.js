"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const api_1 = __importDefault(require("./api"));
const config_1 = require("./config");
const database_1 = require("./config/database");
const server = http_1.default.createServer(api_1.default);
const { serverConfig } = config_1.config;
const onListening = () => {
    console.log("Server ejecutandose en el puerto " + serverConfig.PORT);
};
const onError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof serverConfig.PORT === "string"
        ? "Pipe " + serverConfig.PORT
        : "Port " + serverConfig.PORT;
    switch (error) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit();
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            break;
        default:
            break;
    }
};
server.on("listening", onListening);
server.on("error", onError);
database_1.db.connect();
server.listen(serverConfig.PORT);
//# sourceMappingURL=server.js.map