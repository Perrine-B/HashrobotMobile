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
              <TouchableOpacity
                onPress={onPress}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>200</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onPress}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>300</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onPress}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>500</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.choice}>
            <Text style={{ ...styles.title, ...styles.choiceTitle }}>
              Background aléatoire
            </Text>
            <View style={styles.buttons}>
              <Switch
                trackColor={{ false: "#CBD4C2", true: "#212922"}}
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
              <TouchableOpacity
                onPress={onPress}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>PNG</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPress}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>JPG</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/** End Choices section */}
        {/** Submit section */}
        <View style={styles.submitSection}>
          <TouchableOpacity onPress={onPress} style={styles.submitButton}>
            <Text style={styles.appButtonText}>Générer mon avatar</Text>
          </TouchableOpacity>
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
  appButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#212922",
    borderRadius: 8,
    height: 45,
    width: 60,
    margin: 4,
  },
  appButtonText: {
    fontSize: 16,
    color: "#CBD4C2",
    textTransform: "uppercase",
  },
  submitSection: {
    marginTop: 20,
    justifyContent: "center",
  },
  submitButton: {
    height: 60,
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#0E6BA8",
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 20
  },
});