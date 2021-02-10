import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import SubmitButton from "../components/SubmitButton";
import TagButton from "../components/TagButton";
import API from "../utils/api";
import DownloadIcon from "../../assets/download";

export default function Home() {
  const ref = useRef(null);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const [display, setDisplay] = useState(true);
  const [robot, setRobot] = useState("");

  useEffect(() => {
    //
    if (robot === "") {
      API.get("/hellocesi/?set=set4")
        .then(function (response) {
          // handle success
          console.log(response.status);
          if (response.status === 200) {
            setRobot("https://robohash.org/hellocesi/?set=set4");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, []);

  const onPress = () => {
    // générer une chaine de caractère aléatoire
    const randomChars = Math.random().toString(36).substring(7);
    // générer un chiffre entre 1 & 4
    const randomSet = Math.floor(Math.random() * 4) + 1;

    API.get(`/${randomChars}/?set=set${randomSet}`)
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          console.log("onpress", response.status);
          setRobot(`https://robohash.org/${randomChars}/?set=set${randomSet}`);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const currentRobot = {
    uri: robot,
    width: 200,
    height: 200,
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View
        style={{ height: windowHeight, ...styles.home }}
        alwaysBounceVertical={true}
        ref={ref}
      >
        <Text style={styles.title}>
          Générateur d'avatar de robots destructeurs de mondes
        </Text>
        <View>{robot !== "" && <Image source={currentRobot} />}</View>
        <View style={{ width: windowWidth, ...styles.buttons }}>
          <SubmitButton
            style={styles.test}
            text={"Choisir un autre robot"}
            onPress={onPress}
          />
          <TagButton
            onPress={onPress}
            icon={<DownloadIcon style={styles.icon} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Text Image button & scrollview
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  home: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingTop: 60
  },
  icon: {
    color: "#CBD4C2",
  },
  title: {
    color: "#0E6BA8",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 40,
  },
});
