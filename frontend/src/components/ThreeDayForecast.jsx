import React from "react";
import { Card, Typography, Box, Divider } from "@mui/material";

const ThreeDayForecast = ({ forecast }) => {
    if (!forecast || forecast.length === 0) return null; // Prevent rendering if no data
    
    return (
        <Card sx={{
            p: 2,
            height: 100,
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            {forecast.map((day, index) => (
                <Box key={index} sx={{ textAlign: "center", flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {day.date}
                    </Typography>
                    <img src={`https:${day.icon}`} alt="weather icon" width={50} />
                    <Typography variant="h6">{day.avg_temp}°C</Typography>
                    <Typography variant="body2">Rain: {day.rain}%</Typography>

                    {/* Add divider between days (except last one) */}
                    {index < forecast.length - 1 && (
                        <Divider orientation="vertical" flexItem sx={{ mx: 2, bgcolor: "rgba(255, 255, 255, 0.5)" }} />
                    )}
                </Box>
            ))}
        </Card>
    );
};

export default ThreeDayForecast;
