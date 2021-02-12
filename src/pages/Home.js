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
import Avatar from "../components/Avatar";
import RobotStyle from "../components/RobotStyle";
import BackgroundSelection from "../components/BackgroundSelection";
import PropTypes from "prop-types";
import CircleSolid from "../../assets/circle-solid.svg";
import Circle from "../../assets/circle-regular.svg";
import RandomSelection from "../components/RandomSelection";
import DownloadModal from "../components/DownloadModal";

export default function Home(props) {
  const {
    robot,
    loader,
    getAvatarByType,
    getRandomAvatar,
    getAvatarBackground,
    downloadImage,
    confirmDownload,
    resetConfirmation,
  } = props;

  const  [fullCircle, setFullCircle ] = useState(true);

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
    const itemHeight = windowHeight / 2.2;

    return (
      <View style={{ width: windowWidth, height: itemHeight }}>
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
          <DownloadModal
            downloadImage={downloadImage}
            robot={robot}
            confirmDownload={confirmDownload}
            resetConfirmation={resetConfirmation}
            loader={loader}
          />
          <SubmitButton text={"Telecharger "} onPress={onPress} />
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
        <View style={styles.fakeCarousel}>
          <View style={styles.toRework}>
            {!fullCircle ? (
              <CircleSolid
                style={{ color: "#A2AA39", width: 10, height: 10 }}
              />) : (
              <Circle style={{ color: "#A2AA39", width: 10, height: 10 }} />
            )}
            {fullCircle ? (
              <CircleSolid
                style={{ color: "#A2AA39", width: 10, height: 10 }}
              />) : (
              <Circle style={{ color: "#A2AA39", width: 10, height: 10 }} />
            )}
          </View>
        </View>
        <View style={{ height: midHeight }} alwaysBounceVertical={true}>
          {/** Image box */}
          <FlatList
            style={styles.flatlist}
            data={choices}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            getItemLayout={(data, index) => ({
              length: windowHeight,
              offset: windowHeight * index,
              index,
            })}
            onEndReached={() => setFullCircle(!fullCircle)}
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
  flatlist: {
    paddingTop: 10,
    shadowColor: "#0E6BA8",
    shadowOffset: {
      width: 1,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 5.65,
    elevation: 1,
    //   width: 1,
    //   top: 0,
    //   bottom: "50%",
    //   left: 0,
    //   backgroundColor: "blue",
    //   overflow: "hidden",
  },
});

Home.propTypes = {
  robot: PropTypes.string.isRequired,
  loader: PropTypes.bool.isRequired,
  getRandomAvatar: PropTypes.func.isRequired,
  getAvatarByType: PropTypes.func.isRequired,
};
