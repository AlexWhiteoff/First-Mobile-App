import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Suspense, useEffect, useState } from "react";
import Gallery from "../Components/Gallery/GalleryCollection";
import { ImagesSkeleton } from "../Components/skeletons";
import { fetchGallery } from "../services/dataFetch";

const GalleryScreen = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchGallery("");
            setJsonData(data);
        }

        fetchData();
    }, []);

    return (
        <View style={styles.mainBlock}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.titleText}>Галерея</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Suspense fallback={<ImagesSkeleton />}>
                        <Gallery set={jsonData} />
                    </Suspense>
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
