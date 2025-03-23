import express from "express";
import cors from "cors";
import { config } from "dotenv";
import weatherRoutes from "./routes/weatherRoutes.mjs";
import newsRoutes from "./routes/newsRoutes.mjs";

// Load .env


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", weatherRoutes);
app.use("/api", newsRoutes);

export default app;
