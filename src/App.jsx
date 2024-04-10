import * as React from "react";
import { Button, Text, useColorScheme, View } from "react-native";
import { HomeIcon, PhotoIcon, UserIcon } from "@heroicons/react/24/outline";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Footer from "./Components/Footer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import GalleryScreen from "./Screens/GalleryScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Components/Header";
import NavBar from "./Components/nav-links";

const tabData = [
    {
        name: "Home",
        icon: HomeIcon,
        component: HomeScreen,
        isActive: true,
    },
    {
        name: "Gallery",
        icon: PhotoIcon,
        component: GalleryScreen,
    },
    {
        name: "Profile",
        icon: UserIcon,
        component: ProfileScreen,
    },
];

const Stack = createNativeStackNavigator();

function App() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <NavigationContainer>
                <Stack.Navigator>
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
