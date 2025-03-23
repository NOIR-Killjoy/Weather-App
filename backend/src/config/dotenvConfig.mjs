import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix for ES module path issues
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the backend root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const access = {
    PORT: process.env.PORT,
}
export const KEYS = {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    NEWS_API_KEY: process.env.NEWS_API_KEY
};