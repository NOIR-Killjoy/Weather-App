import app from "../backend/src/app.mjs";

const PORT = process.env.PORT || 5000;

app.get("/weather", async (req, res) => {  const location = req.query.location;
    if (!location) return res.status(400).json({ error: 'Location is required' });

    try {
        const weatherData = await fetchWeatherFromAPI(location);
        console.log("✅ Backend is sending this data:", weatherData); // Check if data exists
        res.json(weatherData);
    } catch (error) {
        console.error("❌ Backend error:", error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.get("/news", async (req, res) => {
    const location = req.query.location;
    if (!location) return res.status(400).json({ error: "Location is required" });

    try {
        const newsData = await getNewsData(location);
        console.log("✅ Backend is sending this news data:", newsData); // Check if data exists
        res.json(newsData);
    } catch (error) {
        console.error("❌ Backend error:", error);
        res.status(500).json({ error: "Failed to fetch news data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
