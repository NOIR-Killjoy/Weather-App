import { useState, useEffect } from "react";
import { getWeatherData, getNewsData } from "../services/api";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import ForecastChart from "../components/ForecastChart";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import AQIComponent from "../components/AQI";
import Header from "../components/Header";
import ThreeDayForecast from "../components/ThreeDayForecast";

const Home = () => {
    const [city, setCity] = useState("Sehore,India");
    const [weather, setWeather] = useState(null);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [pm2_5,setPm2_5] = useState([]);
    const [error, setError] = useState(null);
    const [forecast,setForecast] = useState([]);

    const getBackgroundStyle = () => {
        if (!weather) return { backgroundColor: "#2b2b2b" }; // Default dark mode
    
        const condition = weather.condition.toLowerCase();
        const hour = new Date().getHours(); // Get current hour (0-23)
        const isDay = hour >= 6 && hour < 18; // Daytime check
    
        // Define background styles in a single return statement
        return {
            background: 
                condition.includes("rain")  ? (isDay ? "linear-gradient(to bottom, #a1c4fd, #c2e9fb)" : "linear-gradient(to bottom, #3a3d40, #181719)")
                : condition.includes("clear") || condition.includes("sunny")
                ? (isDay ? "linear-gradient(to bottom, #ffdf86, #ff9a44)" : "linear-gradient(to bottom, #1e3c72, #2a5298)")
                : condition.includes("mist") || condition.includes("fog")
                ? "linear-gradient(to bottom, #b2beb5, #868f96)"
                : condition.includes("cloud")   ? (isDay ? "linear-gradient(to bottom, #dfe9f3, #a6c0fe)" : "linear-gradient(to bottom, #485563, #29323c)")
                : { backgroundColor: "#2b2b2b" } // Default fallback
        };
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const location = city;
                const weatherData = await getWeatherData(location);
                const newsData = await getNewsData(location);

                console.log("Weather Data:", weatherData);
                console.log("News Data:", newsData);

                setWeather(weatherData);
                setNews(newsData);
                setHourlyForecast(weatherData?.hourly_forecast || []);
                console.log(weatherData.aqi);
                if (weatherData.aqi && typeof weatherData.aqi === "number") {
                    setPm2_5(Number(weatherData.aqi));  // ✅ Ensure it is a number
                } else {
                    setPm2_5(null);  // Reset if invalid
                }
                setForecast(weatherData?.three_day_forecast || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data. Please try again later")
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [city]);

return (
    <Box 
        sx={{ 
            minHeight: "100vh", 
            display: "flex", 
            flexDirection: "column", 
            ...getBackgroundStyle(),  // ✅ Ensure it's inside one parent <Box>
            color: "white", 
            p: 3 
        }}
    >
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Weather & News App</Typography>
            {/* Header with Search & Recent Locations */}
            <Header onSearch={setCity} />

            {loading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}

            {weather ? <WeatherCard weather={weather} /> : <Typography>No weather data found.</Typography>}

            {/* 50-50 Layout for Forecast and AQI */}
            <Box sx={{ display: "flex", gap: 3, width: "100%" }}>
            <Box sx={{ flex: 1, minWidth: "50%" }}>
                <ForecastChart hourlyForecast={hourlyForecast} />
            </Box>
            <Box sx={{ flex: 1, minWidth: "50%" }}>
                <AQIComponent pm2_5={pm2_5} />
                <ThreeDayForecast forecast={forecast}/>
            </Box>
            </Box>

            {/* News Section */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5">Latest News</Typography>
                    <NewsCard articles={news}/>
            </Box>
        </Container>
    </Box>
);
}

export default Home;
