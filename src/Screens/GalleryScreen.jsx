import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Suspense, useEffect, useState } from "react";
import Gallery from "../Components/Gallery/GalleryCollection";
import { ImagesSkeleton } from "../Components/skeletons";
import { fetchGallery } from "../services/dataFetch";

const GalleryScreen = () => {
    const [urlData, setUrlData] = useState([]);

    useEffect(() => {
        async function fetchUrl() {
            const data = await fetchGallery();
            setUrlData(data);
        }

        fetchUrl();
    }, []);

    return (
        <View style={styles.mainBlock}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.titleText}>Галерея</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {urlData.length > 0 ? <Gallery images={urlData} /> : <ImagesSkeleton />}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        padding: 10,
    },
    titleText: {
        fontSize: 21,
        fontFamily: "Time New Roman",
        fontWeight: "700",
        color: "#3e3e3e",
        textAlign: "center",
    },
});

export default GalleryScreen;
