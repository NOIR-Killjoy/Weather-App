// import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// const NewsCard = ({ article }) => {  // ✅ Use "article" instead of "results"
//     return (
//         <Card sx={{ Width: 150, mx: "auto", mt: 2 }}>
//             <a href={article.link} target="_blank" rel="noopener noreferrer">
//                 <CardMedia
//                     component="img"
//                     height="200"
//                     image={article.image || "https://via.placeholder.com/400"} // ✅ Placeholder for missing images
//                     alt={article.title}
//                     sx={{ cursor: "pointer" }}
//                 />
//             </a>
//             <CardContent>
//                 <Typography variant="h6">{article.title}</Typography>
//                 <Typography variant="body2">{article.description}</Typography>
//             </CardContent>
//         </Card>
//     );
// };

// export default NewsCard;
// import { Box, Card, CardContent, Typography } from "@mui/material";

// const NewsSection = ({ article }) => {
//     if (!article || article.length === 0) return <Typography>No news found.</Typography>;

//     return (
//         <Box 
//             sx={{
//                 mt: 4,
//                 width: "100%",
//                 overflowX: "auto",
//                 whiteSpace: "nowrap",
//                 display: "flex",
//                 gap: 2,
//                 pb: 2,
//                 scrollbarWidth: "thin",
//                 "&::-webkit-scrollbar": {
//                     height: "8px",
//                 },
//                 "&::-webkit-scrollbar-thumb": {
//                     background: "rgba(255, 255, 255, 0.4)",
//                     borderRadius: "10px",
//                 },
//             }}
//         >
//                 <Card 
//                     sx={{ 
//                         minWidth: 300, 
//                         background: "rgba(255, 255, 255, 0.2)",
//                         backdropFilter: "blur(10px)", 
//                         borderRadius: "12px", 
//                         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//                         border: "1px solid rgba(255, 255, 255, 0.2)",
//                         color: "white"
//                     }}
//                 >
//                     <CardContent>
//                         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                             {article.title}
//                         </Typography>
//                         <Typography variant="body2" sx={{ mt: 1 }}>
//                             {article.source}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//         </Box>
//     );
// };

// export default NewsSection;

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsCard = ({ articles }) => {
    if (!articles || articles.length === 0) return <Typography>No news found.</Typography>;

    return (
        <Box 
            sx={{
                mt: 4,
                width: "100%",
                overflowX: "auto",
                whiteSpace: "nowrap",
                display: "flex",
                gap: 2,
                pb: 2,
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                    height: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "rgba(255, 255, 255, 0.4)",
                    borderRadius: "10px",
                },
            }}
        >
            {articles.map((article, index) => (
                <Card 
                    key={index} 
                    sx={{ 
                        minWidth: 300, 
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)", 
                        borderRadius: "12px", 
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "white"
                    }}
                >
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            component="img"
                            height="180"
                            image={article.image || "https://via.placeholder.com/400"}
                            alt={article.title}
                            sx={{ cursor: "pointer", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                        />
                    </a>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                            {article.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, fontSize: "0.8rem", opacity: 0.8 }}>
                            {article.source}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default NewsCard;