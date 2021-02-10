import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

export default function Home() {
  const ref = useRef(null);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const [display, setDisplay] = useState(true);
  const [robot, setRobot] = useState('')

  const onPress = () => {
    console.log("banane");
    // Scroll to the top of the screen when the button is clicked
    ref?.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  useEffect(() => {  



 });

 function RobotAvatar(props) {

  return (
    <Image source={{}}></Image>
  )

 }

  const getUserInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" />

      <View
        style={{ height: windowHeight, ...styles.home }}
        alwaysBounceVertical={true}
        ref={ref}
      >
        <Text style={styles.title}>
          Avatar de robots destructeur de mondes simulator{" "}
        </Text>

        <KeyboardAvoidingView
          contentContainerStyle={{ height: 120, paddingLeft: 10 }}
          enabled={display}
          behavior="position"
        >
          <View>
            <Image
              style={styles.image}
              source={require("../../assets/robot.jpg")}
            />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.box}>
          <TextInput
            onChange={(event) => getUserInput(event)}
            onFocus={() => setDisplay(false)}
            style={styles.input}
          ></TextInput>
          <TouchableOpacity
            onPress={onPress}
            style={styles.appButtonContainer}
          >
            <Text style={styles.buttonText}>Un avatar au hasard</Text>
          </TouchableOpacity>
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
  input: {
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 5,
    borderColor: "#0E6BA8",
    borderWidth: 1,
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 16,
    color: "#CBD4C2",
    textTransform: "uppercase",
  },
  appButtonContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#0E6BA8",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 65,
  },
});