import dotenv from "dotenv";

const envinroment = process.env.NODE_ENV?.trim();

dotenv.config({
    path: `.env.${envinroment}`,
});

const config = {
    serverConfig: {
        PORT: process.env.PORT || 3000,
    },
    database: {
        MONGO_DB_USER: process.env.MONGO_DB_USER,
        MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
        MONGO_DB_HOST: process.env.MONGO_DB_HOST,
        MONGO_DB_NAME: process.env.MONGO_DB_NAME,
        MONGO_DB_PORT: process.env.MONGO_DB_PORT,
    },
};

export default config;
