import dotenv from "dotenv";

const envinroment = process.env.NODE_ENV?.trim();

dotenv.config({
    path: `.env.${envinroment}`,
});

export const config = {
    serverConfig: {
        PORT: process.env.PORT || 3000,
    },
    database: {
        MONGODB_URI: process.env.MONGODB_URI,
    },
};
