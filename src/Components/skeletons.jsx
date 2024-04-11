import * as React from "react";
import { StyleSheet, View } from "react-native";

export const NewsSkeleton = () => {
    return (
        <View style={NewsSkeletonStyles.newsBlock}>
            <View style={NewsSkeletonStyles.imageBlock}>
                <View style={NewsSkeletonStyles.image}></View>
            </View>
            <View style={NewsSkeletonStyles.infoBlock}>
                <View style={NewsSkeletonStyles.title}></View>
                <View style={NewsSkeletonStyles.date}></View>
                <View style={NewsSkeletonStyles.brief}></View>
            </View>
        </View>
    );
};

export const ImageSkeleton = () => {
    return <View style={ImageSkeletonStyles.imageBlock}></View>;
};

export const ImagesSkeleton = () => {
    return (
        <View style={ImageSkeletonStyles.galleryBLock}>
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
            <ImageSkeleton />
        </View>
    );
};

const ImageSkeletonStyles = StyleSheet.create({
    galleryBLock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
    },
    imageBlock: {
        flexBasis: "48%",
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,
        backgroundColor: "hsl(200, 20%, 95%)",
        height: 100,
        borderRadius: 5,
    },
});

const NewsSkeletonStyles = StyleSheet.create({
    newsBlock: {
        flex: 1,
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
        backgroundColor: "hsl(200, 20%, 95%)",
        width: "100%",
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
    },
    title: {
        height: 22,
        width: "100%",
        paddingLeft: 10,
        backgroundColor: "hsl(200, 20%, 95%)",
        borderRadius: 4,
    },
    date: {
        height: 18,
        width: "100%",
        backgroundColor: "hsl(200, 20%, 95%)",
        paddingLeft: 10,
        borderRadius: 4,
    },
    brief: {
        height: 20,
        width: "100%",
        paddingLeft: 10,
        backgroundColor: "hsl(200, 20%, 95%)",
        borderRadius: 4,
    },
});
