import { Text, View, Button, StyleSheet, ScrollView } from "react-native";
import React, { Suspense, useEffect, useState } from "react";
import { fetchNews } from "../services/dataFetch";
import { NewsBlockSkeleton } from "../Components/skeletons";
import NewsList from "../Components/Home/NewsList";

function HomeScreen({ navigation }) {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetchNews()
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
                        {jsonData.length > 0 ? <NewsList newsList={jsonData} /> : <NewsBlockSkeleton />}
                    </ScrollView>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    mainBlock: {
        backgroundColor: "#fff",
        flex: 1,
        // alignItems: "center",
        // justifyContent: "flex-start",
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
