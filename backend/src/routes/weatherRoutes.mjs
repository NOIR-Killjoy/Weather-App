import express from "express";
import { fetchWeather } from "../controllers/weatherController.mjs";

const router = express.Router();

router.get("/weather", fetchWeather); // Example: /api/weather?location=sehore

export default router;