import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import API from "./src/utils/api";
import Home from "./src/pages/Home";
import Info from "./src/pages/Info";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  const [robot, setRobot] = useState("");
  const [loader, setLoader] = useState(false);
  const [confirmDownload, setConfirmDownload] = useState(false);

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

  const downloadImage = async () => {
    setLoader(true);

    // Step 1 -- download dans l'antichambre d'expo
    const downloadedFile = await FileSystem.downloadAsync(
      robot,
      FileSystem.documentDirectory + "robot.png"
    ).catch(function (error) {
      console.log(error);
    });

    
    if (downloadedFile.status === 200) {
      console.log("downloaded");
      // check Permissions
      const perm = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (perm.status != "granted") {
        console.log("permission granted");
      }
      // Step 2 -- Avec MediaLibrary -> transforme en asset lisible depuis l'extérieur
      try {
        const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
        const album = await MediaLibrary.getAlbumAsync("Download");
        // Check si Download exist
        if (album == null) {
          await MediaLibrary.createAlbumAsync("Download", asset, false);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
          setLoader(false);
          setConfirmDownload(true);
        }
      } catch (e) {}
    }

    if (downloadedFile.status != 200) {
    }
  };

  const resetConfirmation = () => setConfirmDownload(false);

  // Method - Handle change of robots

  const getRandomAvatar = () => {
    console.log("clicked");
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
    setLoader(true);
    // générer une chaine de caractère aléatoire
    const randomChars = Math.random().toString(36).substring(7);
    API.get(`/${randomChars}/?set=set${id}`)
      .then(function (response) {
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

  const getAvatarBackground = () => {
    setLoader(true);
    console.log(robot);
    const newRobot = robot.slice(20);
    console.log(newRobot);
    API.get(`/${newRobot}/?bgset=bg1`)
      .then(function (response) {
        // handle success

        if (response.status === 200) {
          setRobot(`https://robohash.org/${newRobot}/?bgset=bg1`);
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
        swipeEnabled={false}
        tabBarOptions={{
          activeTintColor: "#4d4f4d",
          inactiveTintColor: "#4d4f4d",
          labelStyle: {
            fontSize: 12,
            paddingTop: 30,
          },
          indicatorStyle:{
            backgroundColor: '#A2AA39'
          }
        }}
      >
        <Tab.Screen
          name="Accueil"
          children={() => (
            <Home
              robot={robot}
              getRandomAvatar={getRandomAvatar}
              loader={loader}
              getAvatarByType={getAvatarByType}
              getAvatarBackground={getAvatarBackground}
              downloadImage={downloadImage}
              confirmDownload={confirmDownload}
              resetConfirmation={resetConfirmation}
            />
          )}
        />

        <Tab.Screen name="Infos" component={Info} robot={robot} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
