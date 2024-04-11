import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ImageSnippet from "./GalleryImage";
import { ImagesSkeleton } from "../skeletons";

const Gallery = ({ set }) => {
    return (
        <View style={styles.gallery}>
            <View style={styles.imagesWrapper}>
                {set.map((item, index) => {
                    return <ImageSnippet key={index} src={item.image_url} />;
                })}
            </View>
            {/* <ImagesSkeleton /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    gallery: {
        padding: 10,
    },

    imagesWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
    },
});

export default Gallery;
