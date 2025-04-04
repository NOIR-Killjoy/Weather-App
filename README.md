# 🌤️ Weather App  

A modern weather application built with **React, Node.js, and Express**, offering real-time weather updates, humidity levels, probability of rain, sunset timings, and local news integration. The app features a **widget-style layout** with a **dynamic background theme** that adapts to weather conditions and time.

---

## 📌 Features  

### 🎨 Frontend
- **Modern UI** – Built with **Material-UI (MUI)** for a sleek, intuitive design.
- **Live Weather Data** – Displays:
  - Temperature
  - Humidity levels
  - Probability of rain (next 3 hours)
  - Sunset time
  - 3-day forecast  
- **Interactive Graphs** – Uses **Recharts** for:
  - Hourly precipitation chart
  - Wind data visualization  
- **Local News Applet** – Fetches relevant **local news** updates.
- **Dynamic Theming** – Background changes based on weather conditions and time.

### 🚀 Backend
- **Node.js & Express** – Serves a RESTful API for frontend communication.
- **Real-Time Weather Data** – Fetches from external APIs.
- **Optimized Performance** – Implements caching for better efficiency.
- **Secure API Handling** – Request validation and error management.

---

## 🛠️ Tech Stack  

| Stack           | Technology Used                              |
|-----------------|----------------------------------------------|
| **Frontend**    | React.js, Material-UI (MUI), Recharts, Axios |
| **Backend**     | Node.js, Express.js, Axios, Dotenv           |
| **Deployment**  | Vercel (Frontend), Railway/Render (Backend)  |

---

## 📂 Project Structure  

weather-app/ │── backend/ # Node.js + Express backend │ ├── routes/ # API route handlers │ ├── controllers/ # Business logic │ ├── utils/ # Helper functions │ ├── .env # Environment variables │ ├── server.js # Main server file │── frontend/ # React frontend │ ├── src/ # Main frontend source code │ ├── components/ # Reusable UI components │ ├── assets/ # Images & icons │ ├── App.js # Main React app file │ ├── .env # Environment variables │── README.md # Project documentation │── package.json # Project dependencies

---

## 🏗️ Installation and Setup  

### Prerequisites  
Ensure you have installed:
- **Node.js** (LTS version recommended)
- **npm** or **yarn**

### 🔧 Backend Setup  
1. Navigate to the backend directory:
   ```sh
   cd backend
Install dependencies:

    npm install
Configure API keys in .env:

    WEATHER_API_KEY=your_api_key
    NEWS_API_KEY=your_news_api_key
    PORT=5000
Start the backend server:

    npm start
The backend will run at http://localhost:5000.

🎨 Frontend Setup
Navigate to the frontend directory:

    cd frontend
Install dependencies:

    npm install
Configure the .env file:

    REACT_APP_BACKEND_URL=http://localhost:5000
Start the frontend:
    
    npm start
The frontend will be available at http://localhost:3000.

🌍 API Endpoints (Backend)
Endpoint	Method	Description
/weather	GET	Fetches weather data from external API
/news	GET	Retrieves local news updates
☁️ Deployment
🚀 Deploying the Frontend (Vercel)
Push your frontend code to GitHub.

Connect the repository to Vercel.

Set up environment variables (REACT_APP_BACKEND_URL).

Deploy with a single click.

🖥️ Deploying the Backend (Railway/Render)
Push your backend code to GitHub.

Connect the repository to Railway or Render.

Set environment variables (WEATHER_API_KEY, NEWS_API_KEY, PORT).

Deploy and obtain a live API URL.

🤝 Contribution
Contributions are welcome! To contribute:

Fork the repository.

Create a feature branch (git checkout -b feature-branch).

Commit your changes (git commit -m "Add new feature").

Push to GitHub (git push origin feature-branch).

Open a pull request.

📜 License
This project is licensed under the MIT License.
