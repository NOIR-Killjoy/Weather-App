import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const getWeatherData = async (location) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/weather?location=${location}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

export const getNewsData = async (location) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/news?location=${location}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};
