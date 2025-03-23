import { getNewsData } from "../services/newsService.mjs";

const fetchNews = async (req, res) => {
    try {
        console.log("Recieved News Query:", req.query)
        const { location } = req.query; // ?country=us
        if (!location) {
            return res.status(400).json({ error: "location is required" });
        }

        const newsData = await getNewsData(location);
        res.json(newsData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { fetchNews };
