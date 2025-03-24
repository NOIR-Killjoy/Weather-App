import axios from "axios";
import { KEYS } from "../config/dotenvConfig.mjs";

const API_KEY = KEYS.WEATHER_API_KEY;

async function getWeatherData(location) {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`);
        
        const data = response.data;
        console.log('Weather data received: ',data)
        return processWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

function processWeatherData(data) {
    if (!data || !data.location || !data.current || !data.forecast) {
        console.error("Invalid data structure:", data);
        return null;
    }

    return {
        location: data.location.name ?? "Unknown",
        country: data.location.country ?? "Unknown",
        temperature: data.current.temp_c ?? "N/A",
        condition: data.current.condition?.text ?? "N/A",
        icon: data.current.condition?.icon ?? "N/A",
        humidity: data.current.humidity ?? "N/A",
        aqi: data.current.air_quality?.pm2_5 ?? "N/A",
        rain_probability: data.forecast.forecastday?.[0]?.day?.daily_chance_of_rain ?? "N/A",
        sunset: data.forecast.forecastday?.[0]?.astro?.sunset ?? "N/A",
        hourly_forecast: data.forecast.forecastday?.[0]?.hour?.map(hour => ({
            time: hour.time ?? "N/A",
            temp: hour.temp_c ?? "N/A",
            precipitation: hour.chance_of_rain ?? "N/A",
            icon: hour.condition.icon ?? "N/A",
        })) ?? [],
        three_day_forecast: data.forecast.forecastday?.map(day => ({
            date: day.date ?? "N/A",
            avg_temp: day.day.avgtemp_c ?? "N/A",
            icon: day.day.condition?.icon ?? "N/A",
        })) ?? [],
    };
}

export { getWeatherData };
