export async function fetchNews(url: string) {
    try {
        // const response = await fetch(url)
        //     .then((res) => res.json())
        //     .catch((err) => {
        //         throw new Error("Failed to fetch data");
        //     });

        // return response;
        const json = require("../news.json");
        return json;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}
