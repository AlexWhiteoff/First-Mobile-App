import { Text, View, Button } from "react-native";
import React from "react";
import { HomeIcon, PhotoIcon, UserIcon } from "@heroicons/react/24/outline";
import { Entypo } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button title="Go to Gallery" onPress={() => navigation.navigate("Gallery")} />
            <Entypo name="home" size={24} color="black" />
        </View>
    );
};

export default HomeScreen;
