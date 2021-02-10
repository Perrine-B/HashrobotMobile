import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";
import SubmitButton from "../components/SubmitButton";
import TagButton from "../components/TagButton";

export default function Article() {
  const isImageSelected = useState(false);

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  // Note a moi meme : https://robohash.org/set_set6/bgset_bg2/3.14159?size=500x500
  const onPress = () => {
    console.log("coucou");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView alwaysBounceVertical={true}>
        <StatusBar style="auto" />
        {/** Image box */}
        <View style={styles.imageSection}></View>
        <Text style={styles.title}>Choisissez un style</Text>
        <View style={styles.carroussel}>
          <Image
            style={
              isImageSelected === true ? styles.selected : styles.unselected
            }
            source={require("../../assets/generate1.png")}
          />
          <Image
            style={
              isImageSelected === true ? styles.selected : styles.unselected
            }
            source={require("../../assets/generate2.png")}
          />
          <Image
            style={
              isImageSelected === true ? styles.selected : styles.unselected
            }
            source={require("../../assets/generate3.png")}
          />
          <Image
            style={
              isImageSelected === true ? styles.selected : styles.unselected
            }
            source={require("../../assets/generate4.png")}
          />
        </View>
        {/** End Image box */}
        {/** Choices section */}
        <View style={styles.choicesSection}>
          <View style={styles.choice}>
            <Text style={{ ...styles.title, ...styles.choiceTitle }}>
              Dimensions
            </Text>
            <View style={styles.buttons}>
              <TagButton text={"200"} onPress={onPress} />
              <TagButton text={"300"} onPress={onPress} />
              <TagButton text={"500"} onPress={onPress} />
            </View>
          </View>

          <View style={styles.choice}>
            <Text style={{ ...styles.title, ...styles.choiceTitle }}>
              Background aléatoire
            </Text>
            <View style={styles.buttons}>
              <Switch
                trackColor={{ false: "#CBD4C2", true: "#212922" }}
                thumbColor={true ? "#212922" : "#CBD4C2"}
                ios_backgroundColor="#3e3e3e"
                //onValueChange={toggleSwitch}
                //value={isEnabled}
              />
            </View>
          </View>

          <View style={styles.choice}>
            <Text style={{ ...styles.title, ...styles.choiceTitle }}>
              Format
            </Text>
            <View style={styles.buttons}>
              <TagButton text={"jpg"} onPress={onPress} />
              <TagButton text={"png"} onPress={onPress} />
            </View>
          </View>
        </View>
        {/** End Choices section */}
        {/** Submit section */}
        <View style={styles.submitSection}>
        <Text style={{ ...styles.title, ...styles.choiceTitle }}>
              Saisissez un texte 
            </Text>
          <TextInput
            onChange={(event) => getUserInput(event)}
            onFocus={() => setDisplay(false)}
            style={styles.input}
          />
          <SubmitButton text={"Générer un robot"} onPress={onPress} />
        </View>
        {/** End Submit section */}
      </ScrollView>
    </SafeAreaView>
  );
}

// Text Image button & scrollview
const styles = StyleSheet.create({
  // The main page
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  imageSection: {},
  carroussel: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  // Styles applied when images are selected
  selected: {
    backgroundColor: "grey",
    margin: 8,
  },
  unselected: {
    backgroundColor: "#EBEEE7",
    margin: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  choicesSection: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  choice: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  choiceTitle: {
    justifyContent: "flex-start",
  },
  buttons: {
    flexDirection: "row",
  },
  submitSection: {
    marginTop: 20,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 5,
    borderColor: "#0E6BA8",
    borderWidth: 1,
    alignSelf: 'center'
  },
});
