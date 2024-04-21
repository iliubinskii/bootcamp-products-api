import "dotenv/config";

export const PORT = process.env.PORT ?? 3000;
export const MONGO_URI = process.env.MONGO_URI;
export const PORT_SSR = process.env.PORT_SSR ?? 8000;
export const TEMP_DIR = process.env.TEMP_DIR;
