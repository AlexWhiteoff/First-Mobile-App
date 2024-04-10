import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavBar = ({ tabs }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.navBar}>
            {tabs.map((tab, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate(tab.name)} styles={styles.button}>
                    <Text style={styles.buttonText}>{tab.name}</Text>
                </TouchableOpacity>
            ))}
            {/* 
            <Button title="Gallery" onPress={() => navigation.navigate("Gallery")} />

            <Button title="Profile" onPress={() => navigation.navigate("Profile")} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "#FFFFFF",
        display: "flex",
        backgroundColor: "#3e3e3e",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 4,
        alignItems: "center",
        padding: 10,
        height: 50,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: {
        marginLeft: 5,
        fontSize: 18,
    },
});

export default NavBar;
