interface News {
    id: string;
    image_url: string;
    title: string;
    date: string;
    brief: string;
}

interface Images {
    id: Number;
    image_name: string;
}

export async function fetchNews(): Promise<News[]> {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const JSON_URL = "https://raw.githubusercontent.com/AlexWhiteoff/First-Mobile-App__assets/master/news.json";

    try {
        const response = await fetch(JSON_URL)
            .then((res) => res.json())
            .catch((err) => {
                throw new Error("Failed to fetch data" + err);
            });

        return response;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function fetchGallery() {
    const JSON_URL = "https://raw.githubusercontent.com/AlexWhiteoff/First-Mobile-App__assets/master/gallery.json";
    const IMAGE_FOLDER_URL = "https://raw.githubusercontent.com/AlexWhiteoff/First-Mobile-App__assets/master/Images/";

    return await fetch(JSON_URL)
        .then((res) => res.json())
        .then((data) => data.map((image: Images) => image.image_name))
        .then((imageNames) => imageNames.map((imageName: string) => IMAGE_FOLDER_URL + imageName))
        .catch((err) => {
            throw new Error("Failed to fetch data. " + err);
        });
}
