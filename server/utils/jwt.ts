import jwt from "jsonwebtoken";

export const createToken = (
    _id: string,
    nombre: string,
    correo: string
): string => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("No hay semilla de JWT");
    }

    return jwt.sign({ _id, nombre, correo }, process.env.JWT_SECRET_SEED, {
        expiresIn: "4h",
    });
};

export const isValidToken = (token: string): Promise<string> => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("No hay semilla de JWT");
    }

    return new Promise((resolve, reject) => {
        try {
            jwt.verify(
                token,
                `${process.env.JWT_SECRET_SEED}` || "",
                (err, payload) => {
                    if (err) return reject("JWT no es válido");

                    const { _id } = payload as { _id: string };

                    resolve(_id);
                }
            );
        } catch (error) {
            reject("JWT no es válido");
        }
    });
};
