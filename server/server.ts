import http from "http";
import api from "./api";
import { config } from "./config";
import { db } from "./config/database";

const server = http.createServer(api);

const { serverConfig } = config;

const onListening = () => {
    console.log("Server ejecutandose en el puerto " + serverConfig.PORT);
};

const onError = (error: any) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind =
        typeof serverConfig.PORT === "string"
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

db.connect();
server.listen(serverConfig.PORT);
