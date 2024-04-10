import React from "react";
import { View, Text, StyleSheet, Appearance } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.textStyle}>Білий Олександр | ІПЗ-20-1 </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "rgb(255,255,255)",
        position: "relative",
        display: "flex",
        bottom: 0,
        left: 0,
        right: 0,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        fontStyle: "italic",
        fontFamily: "Times New Roman",
    },

    textStyle: {
        fontFamily: "Times New Roman",
        fontStyle: "italic",
        color: "#333333",
    },
});

export default Footer;
