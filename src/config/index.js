import "dotenv/config";

export const PORT = process.env.PORT ?? 3000;
export const MONGO_URI = process.env.MONGO_URI;
export const PORT_SSR = process.env.PORT_SSR ?? 8000;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARI_API_KEY = process.env.CLOUDINARI_API_KEY;
export const CLOUDINARY_SECRET_KEY = process.env.CLOUDINARY_SECRET_KEY;
