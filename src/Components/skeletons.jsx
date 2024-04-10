import * as React from "react";
import { StyleSheet, View } from "react-native";

export const NewsSkeleton = () => {
    return (
        <View style={styles.newsBlock}>
            <View style={styles.imageBlock}>
                <View style={styles.image}></View>
            </View>
            <View style={styles.infoBlock}>
                <View style={styles.title}></View>
                <View style={styles.date}></View>
                <View style={styles.brief}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
