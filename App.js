import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MeteorIcon from "./assets/meteor.svg";
import MoonIcon from "./assets/moon.svg";
import DetailedSearch from "./src/pages/DetailedSearch";
import API from "./src/utils/api";
import Home from "./src/pages/Home";
import Info from "./src/pages/Info";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  const [robot, setRobot] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    API.get("/hellocesi/?set=set4")
      .then(function (response) {
        // handle success

        if (response.status === 200) {
          setRobot("https://robohash.org/hellocesi/?set=set4");
          setLoader(false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoader(false);
      });
  }, []);

  // Method - Handle change of robots

  const getRandomAvatar = () => {
    // générer une chaine de caractère aléatoire
    const randomChars = Math.random().toString(36).substring(7);
    // générer un chiffre entre 1 & 4
    const randomSet = Math.floor(Math.random() * 4) + 1;
    setLoader(true);
    API.get(`/${randomChars}/?set=set${randomSet}`)
      .then(function (response) {
        // handle success

        if (response.status === 200) {
          setRobot(`https://robohash.org/${randomChars}/?set=set${randomSet}`);
          setLoader(false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoader(false);
      });
  };

  const getAvatarByType = (id) => {
    console.log("jeveux un", id);
    // générer une chaine de caractère aléatoire
    const randomChars = Math.random().toString(36).substring(7);
    API.get(`/${randomChars}/?set=set${id}`)
      .then(function (response) {
        // handle success

        if (response.status === 200) {
          setRobot(`https://robohash.org/${randomChars}/?set=set${id}`);
          setLoader(false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoader(false);
      });
  };

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
          activeBackgroundColor: "#A2AA39",
          activeTintColor: "white",
          inactiveTintColor: "#4d4f4d",
          labelStyle: {
            fontSize: 12,
            paddingVertical: 10,
          },
        }}
      >
        <Tab.Screen
          name="Accueil"
          children={() => (
            <Home
              robot={robot}
              getRandomAvatar={getRandomAvatar}
              loader={loader}
            />
          )}
        />
        <Tab.Screen
          name="Avancé"
          children={() => (
            <DetailedSearch
              robot={robot}
              loader={loader}
              getAvatarByType={getAvatarByType}
            />
          )}
        />
        <Tab.Screen name="Infos" component={Info} robot={robot} />
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
