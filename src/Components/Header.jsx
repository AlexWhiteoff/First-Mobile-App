import React from "react";
import { View, Text, StyleSheet, Appearance } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textStyle}>ProjectOne </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgb(255,255,255)",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    textStyle: {
        fontFamily: "Times New Roman",
        fontWeight: "700",
        color: "#3e3e3e",
    },
});

export default Header;
