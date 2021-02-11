import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Switch,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import SubmitButton from "../components/SubmitButton";
import TagButton from "../components/TagButton";
import Avatar from "../components/Avatar";
import RobotStyle from "../components/RobotStyle";
import PropTypes from "prop-types";

export default function DetailedSearch(props) {
  const { robot, loader, getAvatarByType } = props;

  const [choices, setChoices] = useState([
    {
      id: 0,
      title: "Choississez un style",
    },
  ]);

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  // Note a moi meme : https://robohash.org/set_set6/bgset_bg2/3.14159?size=500x500
  const onPress = () => {
    console.log("coucou");
  };

  const renderItem = ({ item }) => {
    //const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    console.log(item);
    const { id, title } = item;

    return (
      <>
        <Text style={styles.title}> {title} </Text>
        {id === 0 && (
          <RobotStyle getAvatarByType={getAvatarByType}></RobotStyle>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View alwaysBounceVertical={true}>
        {!loader && robot !== "" ? (
          <Avatar url={robot} />
        ) : (
          <ActivityIndicator
            style={{ height: 200 }}
            size="small"
            color="#A2AA39"
          />
        )}
        {/** Image box */}
        <FlatList
          data={choices}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
            //onChange={(event) => getUserInput(event)}
            //onFocus={() => setDisplay(false)}
            style={styles.input}
          />
          <SubmitButton text={"Générer un robot"} onPress={onPress} />
        </View>

        {/** End Submit section */}
      </View>
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
    alignSelf: "center",
  },
});

DetailedSearch.propTypes = {
  robot: PropTypes.string.isRequired,
  loader: PropTypes.bool.isRequired,
};
