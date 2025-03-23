import { getWeatherData } from "../services/weatherService.mjs";

const fetchWeather = async (req, res) => {
    try {
        console.log("Recieved Weather Query:", req.query)
        const { location } = req.query; // ?location=Sehore
        if (!location) {
            return res.status(400).json({ error: "Location is required" });
        }

        const weatherData = await getWeatherData(location);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { fetchWeather };
