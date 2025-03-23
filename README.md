Weather App

A modern weather application built using React, Node.js, and Express that provides users with accurate weather forecasts, air quality index (AQI), humidity, probability of rain, sunset time, and local news integration. The app features a widget-style layout with a dynamic background theme that changes based on the weather and time.

Features

Frontend:

Modern UI built with Material-UI (MUI) for a sleek, interactive experience.

Weather data display, including:

Temperature

Air Quality Index (AQI)

Humidity levels

Probability of rain (next 3 hours)

Sunset time

3-day forecast

Graphical representation using Recharts, including:

Hourly precipitation chart styled similarly to reference UI screenshots.

Wind data visualization.

Side news applet for local news updates, inspired by AccuWeather.

Custom widget-style layout, integrating drawn UI elements with a clean, intuitive design.

Dynamic themes that adjust based on weather conditions and time of day.

Backend:

Built with Node.js and Express for fast, scalable performance.

API integration for:

Weather data retrieval

AQI information

Local news updates

Efficient data handling with optimized caching for smooth performance.

Secure API handling with proper request validation and error handling.

Endpoints for weather and news data, ensuring seamless communication with the frontend.

Installation and Setup

Prerequisites

Ensure you have the following installed:

Node.js (LTS version recommended)

npm or yarn

Backend Setup

Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Create a .env file in the backend directory and configure necessary API keys.

Start the server:

npm start

Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm start

API Routes (Backend)

Endpoint

Method

Description

/weather

GET

Fetches weather data

/aqi

GET

Retrieves air quality index

/news

GET

Fetches local news updates

Deployment

To deploy the project, consider using Vercel or Netlify for the frontend and Render or Railway for the backend.

Contribution

Feel free to contribute to this project by submitting a pull request. Follow standard coding practices and ensure code quality.

License

This project is licensed under the MIT License.

This README provides an overview of the entire project while maintaining clarity for both frontend and backend setups. Let me know if you want any modifications!

