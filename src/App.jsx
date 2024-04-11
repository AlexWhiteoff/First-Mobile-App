import * as React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import GalleryScreen from "./Screens/GalleryScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const tabData = [
    {
        name: "Головна",
        iconActive: "home",
        iconInactive: "home-outline",
        component: HomeScreen,
    },
    {
        name: "Галерея",
        iconActive: "images",
        iconInactive: "images-outline",
        component: GalleryScreen,
    },
    {
        name: "Профіль",
        iconActive: "person",
        iconInactive: "person-outline",
        component: ProfileScreen,
    },
];

const Stack = createNativeStackNavigator();

function App() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    {tabData.map((tab, index) => (
                        <Stack.Screen name={tab.name} component={tab.component} key={index} />
                    ))}
                </Stack.Navigator>
                <NavBar tabs={tabData} />
            </NavigationContainer>
            <Footer />
        </View>
    );
}

export default App;
