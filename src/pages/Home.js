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
import API from "../utils/api";

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
    console.log("yop");
    function strRandom(o) {
      var a = 10,
        b = "abcdefghijklmnopqrstuvwxyz",
        c = "",
        d = 0,
        e = "" + b;
      if (o) {
        if (o.startsWithLowerCase) {
          c = b[Math.floor(Math.random() * b.length)];
          d = 1;
        }
        if (o.length) {
          a = o.length;
        }
        if (o.includeUpperCase) {
          e += b.toUpperCase();
        }
        if (o.includeNumbers) {
          e += "1234567890";
        }
      }
      for (; d < a; d++) {
        c += e[Math.floor(Math.random() * e.length)];
      }
      return c;
    }
    // générer une chaine de caractère aléatoire
    const randomChars = strRandom({
      includeUpperCase: false,
      includeNumbers: false,
      length: 5,
      startsWithLowerCase: true,
    });

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
          Avatar de robots destructeur de mondes simulator{" "}
        </Text>
        <View>{robot !== "" && <Image source={currentRobot} />}</View>
        <View style={styles.box}>
          <SubmitButton text={"Choisir un autre robot'"} onPress={onPress} />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Text Image button & scrollview
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  home: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box: {
    flexDirection: "column",
  },
  title: {
    color: "#0E6BA8",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
});
