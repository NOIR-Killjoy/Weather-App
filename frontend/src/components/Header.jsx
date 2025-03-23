import { useState } from "react";
import { Box, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const Header = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");
    const [recentLocations, setRecentLocations] = useState(["Delhi, India", "Mumbai, India"]); // Example

    const handleSearch = (e) => {
        if (e.key === "Enter" && searchInput.trim()) {
            onSearch(searchInput);
            setRecentLocations((prev) => [...new Set([searchInput, ...prev])].slice(0, 2));
            setSearchInput("");
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            {/* Search Bar */}
            <TextField
                label="Search City"
                variant="outlined"
                color="#ffd700"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleSearch}
                sx={{ flex: 1, mr: 2 }}
            />

            {/* Dropdown for Recent Locations */}
            <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Recent</InputLabel>
                <Select onChange={(e) => onSearch(e.target.value)} defaultValue="">
                    {recentLocations.map((location, index) => (
                        <MenuItem key={index} value={location}>
                            {location}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Header;
