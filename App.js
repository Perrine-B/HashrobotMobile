import React from "react";
import { StyleSheet, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MeteorIcon from "./assets/meteor.svg";
import MoonIcon from "./assets/moon.svg";
import DetailedSearch from "./src/pages/DetailedSearch";
import Home from "./src/pages/Home";
import Info from './src/pages/Info';

export default function App() {
  const Tab = createBottomTabNavigator();


  return (

    <NavigationContainer>
          <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === "Accueil") {
              return (
                <MoonIcon style={focused ? styles.active : styles.inactive} />
              );
            }
            return (
              <MeteorIcon style={focused ? styles.active : styles.inactive} />
            );
          },
        })}
        tabBarOptions={{
          labelPosition: "beside-icon",
          activeBackgroundColor: "black",
          activeTintColor: "white",
          inactiveTintColor: "#4d4f4d",
          labelStyle: {
            fontSize: 12,
            paddingVertical: 10,
          },
        }}
      >
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Générateur" component={DetailedSearch} />
        <Tab.Screen name="Infos" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Text Image button & scrollview
const styles = StyleSheet.create({
  inactive: {
    color: "black",
  },
  active: {
    color: "white",
  },
});