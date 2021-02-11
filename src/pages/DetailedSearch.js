import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import SubmitButton from "../components/SubmitButton";
import TagButton from "../components/TagButton";
import Avatar from "../components/Avatar";
import RobotStyle from "../components/RobotStyle";
import BackgroundSelection from "../components/BackgroundSelection";
import PropTypes from "prop-types";
import CircleSolid from "../../assets/circle-solid.svg";
import Circle from "../../assets/circle-regular.svg";

export default function DetailedSearch(props) {
  const { robot, loader, getAvatarByType } = props;

  const [choices, setChoices] = useState([
    {
      id: 0,
      title: "Choississez un style",
    },
    {
      id: 1,
      title: "Choissisez un background",
    },
  ]);

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  // Note a moi meme : https://robohash.org/set_set6/bgset_bg2/3.14159?size=500x500
  const onPress = () => {
    console.log("coucou");
  };

  const renderItem = ({ item, index, separators }) => {
    //const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    console.log(separators);
    const { id, title } = item;
    const itemHeight = windowHeight / 2;

    return (
      <View style={{ width: windowWidth, height: itemHeight }}>
        <View style={{ width: windowWidth, height: itemHeight }}>
          <Text style={styles.title}> {title} </Text>

          <View style={styles.fakeCarousel}>
            {id === 0 && (
              <View style={styles.toRework}>
                <CircleSolid
                  style={{ color: "#A2AA39", width: 10, height: 10 }}
                />
                <Circle style={{ color: "#A2AA39", width: 10, height: 10 }} />
              </View>
            )}
               {id === 1 && (
              <View style={styles.toRework}>
                <Circle style={{ color: "#A2AA39", width: 10, height: 10 }} />
                <CircleSolid
                  style={{ color: "#A2AA39", width: 10, height: 10 }}
                />
              </View>
            )}
          </View>
          {id === 0 && <RobotStyle getAvatarByType={getAvatarByType} />}
          {id === 1 && (
            <BackgroundSelection getAvatarByType={getAvatarByType} />
          )}
        </View>
      </View>
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
          keyExtractor={(item) => item.id.toString()}
          horizontal
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
  fakeCarousel: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toRework:{
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
