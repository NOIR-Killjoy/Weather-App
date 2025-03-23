import express from "express";
import { fetchNews } from "../controllers/newsController.mjs";

const router = express.Router();

router.get("/news", fetchNews); // Example: /api/news?country=us

export default router;
