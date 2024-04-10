import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";

const NavBar = ({ tabs }) => {
    const navigation = useNavigation();
    const [activeScreen, setActiveScreen] = useState("unknown");

    useFocusEffect(() => {
        const unsubscribe = navigation.addListener("state", () => {
            const currentRouteName = navigation.getCurrentRoute().name;
            setActiveScreen(currentRouteName);
        });

        return unsubscribe;
    });

    return (
        <View style={styles.navBar}>
            {tabs.map((tab, index) => {
                // icon color
                const activeColor = "#fff";
                const inactiveColor = "#4F8EF7";

                // icon props
                const iconName = activeScreen === tab.name ? tab.iconActive : tab.iconInactive;
                const iconColor = activeScreen === tab.name ? activeColor : inactiveColor;

                return (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate(tab.name)}>
                        <View style={styles.button}>
                            <Icon name={iconName} size={25} color={iconColor} />
                            <Text style={styles.buttonText}>{tab.name}</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
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
    },
    button: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonText: {
        fontSize: 13,
    },
});

export default NavBar;
