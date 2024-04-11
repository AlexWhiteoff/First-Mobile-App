import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import React, { Suspense, useEffect, useState } from "react";
import { fetchNews } from "../services/dataFetch";
import { NewsSkeleton } from "../Components/skeletons";
import NewsList from "../Components/Home/NewsList";

function HomeScreen({ navigation }) {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetchNews("")
                .then((json) => setJsonData(json))
                .catch((err) => console.error(err));
        }

        fetchData();
    }, []);

    return (
        <View style={styles.mainBlock}>
            <View style={styles.header}>
                <Text style={styles.titleText}>Новини</Text>
            </View>
            {Array.isArray(jsonData) && (
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <Suspense fallback={<NewsSkeleton />}>
                            <NewsList newsList={jsonData} />
                        </Suspense>
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

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

export default HomeScreen;
