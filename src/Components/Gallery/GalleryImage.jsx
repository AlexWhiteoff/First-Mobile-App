import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";

const ImageSnippet = ({ src }) => {
    const FALLBACK_IMAGE = require("../../assets/img/Placeholder_image.jpg");
    const [imageSrc, setImageSrc] = useState(FALLBACK_IMAGE);

    useEffect(() => {
        setImageSrc({ uri: src });
    }, []);

    const loadFallback = () => {
        setImageSrc(FALLBACK_IMAGE);
    };
    return (
        <View style={styles.imageBlock}>
            <Image style={styles.image} source={imageSrc} onError={() => loadFallback()} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageBlock: {
        flexBasis: "48%",
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,
        backgroundColor: "hsl(200, 20%, 95%)",
        height: 100,
        borderRadius: 5,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
        overflow: "hidden",
    },
});

export default ImageSnippet;
