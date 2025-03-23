import React from "react";
import { Box, Typography } from "@mui/material";
import AQIIcon from "../misc/AQI.png"; // Import the AQI image

// Function to determine AQI category and background color
const getAQIStatus = (pm2_5) => {
    if (pm2_5 <= 50) return { label: "Good", color: "#2ECC71" };
    if (pm2_5 <= 100) return { label: "Moderate", color: "#F1C40F" };
    if (pm2_5 <= 150) return { label: "Unhealthy for Sensitive Groups", color: "#E67E22" };
    if (pm2_5 <= 200) return { label: "Unhealthy", color: "#E74C3C" };
    if (pm2_5 <= 250.4) return { label: "Very Unhealthy", color: "#8E44AD" };
    return { label: "Hazardous", color: "#7B241C" };
};

const AQIComponent = ({ pm2_5 }) => {
    if (pm2_5 === null || pm2_5 === undefined || isNaN(pm2_5)) {
        return <Typography>No AQI data available</Typography>;
    }
    const { label, color } = getAQIStatus(pm2_5);

    return (
        <Box
            sx={{
                p: 3,
                height: 50,
                borderRadius: 2,
                backgroundColor: color,
                color: "#fff",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <img src={AQIIcon} alt="AQI Icon" width={30} height={30} />
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>AQI: {pm2_5}</Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 1 }}>{label}</Typography>
            </Box>
    );
};

export default AQIComponent;
