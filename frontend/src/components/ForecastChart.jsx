import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { icon, rain, temp } = payload[0].payload;

        return (
            <div style={{
                background: "#333",
                color: "#fff",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #555",
                display: "flex",
                alignItems: "center",
            }}>
                <img src={icon} alt="Weather Icon" width={40} height={40} style={{ marginBottom: "5px" }} />
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>{`${temp}°C`}</span>
                <span style={{ fontSize: "14px", opacity: 0.8 }}>{`Rain: ${rain}%`}</span>
            </div>
        );
    }
    return null;
};

const ForecastChart = ({ hourlyForecast = [] }) => {
    console.log(hourlyForecast)
    if (!hourlyForecast.length) return null; // Prevent rendering if data is missing

    // Transform data safely
    const formattedData = hourlyForecast.map((item) => ({
        time: item.time.split(" ")[1] || "N/A", // Extract HH:MM
        temp: item.temp,
        rain: item.precipitation,
        icon: `https:${item.icon}` || "https://via.placeholder.com/30", // Add 'https:' to ensure proper image loading
    }));

    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="time" tick={{ fill: "#3c3c3c" }} />
                <YAxis tickFormatter={(value) => `${value}°C`} tick={{ fill: "#fcfcfc" }} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="temp" stroke="orange" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ForecastChart;
