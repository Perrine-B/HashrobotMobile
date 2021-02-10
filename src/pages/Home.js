import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import SubmitButton from "../components/SubmitButton";

export default function Home() {
  const ref = useRef(null);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const [display, setDisplay] = useState(true);
  const [robot, setRobot] = useState("");

  const onPress = () => {
    console.log("banane");
    // Scroll to the top of the screen when the button is clicked
    ref?.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  useEffect(() => {});

  function RobotAvatar(props) {
    return <Image source={{}}></Image>;
  }

  const getUserInput = (e) => {
    console.log(e.target.value);
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
      
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/robot.jpg")}
            />
          </View>
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
    justifyContent: "center",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 30,
  },
  home: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: 300,
  },
  box: {
    flexDirection: "column",
  },
  title: {
    color: "#0E6BA8",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    textAlign: "center",
  },
  text: {
    paddingHorizontal: 20,
  },
});
