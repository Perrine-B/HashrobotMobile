import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
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
import RandomSelection from "../components/RandomSelection";

export default function Home(props) {
  const { robot, loader, getAvatarByType, getRandomAvatar, getAvatarBackground } = props;

  const [choices] = useState([
    {
      id: 0,
      title: "Choix aléatoire",
    },
    {
      id: 1,
      title: "Choississez un style",
    },
  ]);

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  // Note a moi meme : https://robohash.org/set_set6/bgset_bg2/3.14159?size=500x500
  const onPress = () => {
    console.log("coucou");
  };

  const renderItem = ({ item, index, separators }) => {
    //const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    const { id, title } = item;
    const itemHeight = windowHeight / 2;

    return (
      <View style={{ width: windowWidth, height: itemHeight }}>
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
        <View style={{ width: windowWidth, height: itemHeight }}>
          <Text style={styles.title}> {title} </Text>

          {id === 0 && <RandomSelection getRandomAvatar={getRandomAvatar} />}
          {id === 1 && (
            <View>
              <RobotStyle getAvatarByType={getAvatarByType} />
             
            </View>
          )}
          {id === 2 && (
            <BackgroundSelection getAvatarBackground={getAvatarBackground} />
          )}
        <SubmitButton text={"Telecharger "} />
        </View>
      </View>
    );
  };

  const midHeight = windowHeight / 2;
  const midWidth = windowWidth / 2;

  return (
    <SafeAreaView style={styles.screen}>
      <View alwaysBounceVertical={true}>
        <View
          style={{ height: midHeight, ...styles.topSection }}
          alwaysBounceVertical={true}
        >
          <Text style={styles.title}>
            Générateur de robots destructeurs de monde
          </Text>
          {!loader && robot !== "" ? (
            <Avatar url={robot} />
          ) : (
            <ActivityIndicator
              style={{ height: 200 }}
              size="small"
              color="#A2AA39"
            />
          )}
        </View>
        <View style={{ height: midHeight }} alwaysBounceVertical={true}>
          {/** Image box */}
          <FlatList
            data={choices}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            getItemLayout={(data, index) => ({
              length: windowHeight,
              offset: windowHeight * index,
              index,
            })}
          />
        </View>
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
    paddingTop: 10,
  },
  topSection: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: "#0E6BA8",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
  fakeCarousel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toRework: {
    flexDirection: "row",
  },
});

Home.propTypes = {
  robot: PropTypes.string.isRequired,
  loader: PropTypes.bool.isRequired,
  getRandomAvatar: PropTypes.func.isRequired,
  getAvatarByType: PropTypes.func.isRequired,
};

