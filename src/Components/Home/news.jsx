import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const NewsImage = ({ src }) => {
    const FALLBACK_IMAGE = require("../../assets/img/Placeholder_image.jpg");
    const [imageSrc, setImageSrc] = useState(FALLBACK_IMAGE);

    useEffect(() => {
        setImageSrc({ uri: src });
    }, []);

    const loadFallback = () => {
        setImageSrc(FALLBACK_IMAGE);
    };
    return <Image style={styles.image} source={imageSrc} onError={() => loadFallback()} />;
};

const NewsSnippet = ({ news }) => {

    return (
        <View style={styles.newsBlock}>
            <View style={styles.imageBlock}>
                <NewsImage src={news.image_url} />
            </View>
            <View style={styles.infoBlock}>
                <View style={styles.titleBlock}>
                    <Text style={styles.titleText}>{news.title}</Text>
                </View>
                <View style={styles.dateBlock}>
                    <Text style={styles.dateText}>{news.date}</Text>
                </View>
                <View style={styles.briefBlock}>
                    <Text style={styles.briefText}>{news.brief}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    newsBlock: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        padding: 10,
    },
    imageBlock: {
        flex: 1,
        margin: 5,
    },
    infoBlock: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 4,
        margin: 5,
    },
    image: {
        // backgroundColor: "hsl(200, 20%, 95%)",
        width: "100%",
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
    },
    titleBlock: {
        height: 22,
        fontWeight: "bold",
        fontSize: 16,
        width: "100%",
        paddingLeft: 10,
        // backgroundColor: "hsl(200, 20%, 95%)",
        borderRadius: 4,
    },
    titleText: {
        fontFamily: "Times New Roman",
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
    },
    dateBlock: {
        height: 18,
        width: "100%",
        fontSize: 13,
        // backgroundColor: "hsl(200, 20%, 95%)",
        paddingLeft: 10,
        borderRadius: 4,
    },
    dateText: {
        fontFamily: "Times New Roman",
        fontStyle: "italic",
        fontSize: 13,
    },
    briefBlock: {
        height: 20,
        fontSize: 14,
        width: "100%",
        paddingLeft: 10,
        // backgroundColor: "hsl(200, 20%, 95%)",
        borderRadius: 4,
    },
    briefText: {
        fontFamily: "Times New Roman",
        fontSize: 14,
        color: "#fff",
    },
});

export default NewsSnippet;
