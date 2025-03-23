import axios from "axios";
import { KEYS } from "../config/dotenvConfig.mjs";

const getNewsData = async (location) => {
    try {
        const API_KEY = KEYS.NEWS_API_KEY;
        const response = await axios.get(
            `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${location}`
        );

        const articles = Array.isArray(response.data.results) ? response.data.results : [];

        return articles.map((article) => ({
            title: article.title,
            description: article.description,
            url: article.source_url,
            image: article.image_url,
            source: article.source,
            publishedAt: article.publishedAt,
        })).slice(0, 5);
    } catch (error) {
        console.error("News API Error:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch news");
    }
};

export { getNewsData };
