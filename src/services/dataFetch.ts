interface News {
    id: string;
    image_url: string;
    title: string;
    date: string;
    brief: string;
}

export async function fetchNews(url: string): Promise<News[]> {
    try {
        // const response = await fetch(url)
        //     .then((res) => res.json())
        //     .catch((err) => {
        //         throw new Error("Failed to fetch data");
        //     });

        // return response;
        
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const json = require("../news.json");
        return json;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function fetchGallery(url: string) {
    try {
        // const response = await fetch(url)
        //     .then((res) => res.json())
        //     .catch((err) => {
        //         throw new Error("Failed to fetch data");
        //     });

        // return response;

        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const json = require("../gallery.json");
        return json;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}
