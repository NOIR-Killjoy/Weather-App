
import { Card, CardContent, Typography, Box } from "@mui/material";

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    return (
        <Card sx={{ maxWidth: 400, mx: "auto", mt: 2, p: 2, display: "flex", alignItems: "center" ,background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(10px)", borderRadius: "16px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", color: "white", border: "1px solid rgba(255, 255, 255, 0.2)"}}>
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5">{`${weather.location}, ${weather.country}`}</Typography>
                
                {/* Temperature and Weather Condition */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}>
                    <Typography variant="h4">{weather?.temperature}°C</Typography>
                    <img 
                        src={weather?.icon} 
                        alt={weather?.condition} 
                        style={{ width: 50, height: 50 }} 
                    />
                </Box>
                
                <Typography>{weather?.condition}</Typography>
            </CardContent>

            {/* Sidebar for Humidity & Sunset */}
            <CardContent sx={{ textAlign: "right" }}>
                <Typography variant="body1">💧 Humidity: {weather?.humidity}%</Typography>
                <Typography variant="body1">🌅 Sunset: {weather?.sunset}</Typography>
            </CardContent>
        </Card>
    );
};

export default WeatherCard;
