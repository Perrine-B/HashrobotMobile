import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import SubmitButton from "../components/SubmitButton";
import TagButton from "../components/TagButton";
import PropTypes from "prop-types";
import DownloadIcon from "../../assets/download";
import Avatar from "../components/Avatar";

export default function Home(props) {
  const { robot, getRandomAvatar, loader } = props;
  const ref = useRef(null);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  useEffect(() => {
    //
  }, []);

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

        {!loader && robot !== "" ? (
          <Avatar url={robot} />
        ) : (
          <ActivityIndicator style={{height: 200}} size="small" color="#A2AA39" />
        )}

        <View style={{ width: windowWidth, ...styles.buttons }}>
          <SubmitButton
            style={styles.test}
            text={"Choisir un autre robot"}
            onPress={getRandomAvatar}
          />
          <TagButton
            //onPress={onPress}
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
    paddingTop: 60,
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

Home.propTypes = {
  robot: PropTypes.string.isRequired,
  getRandomAvatar: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired
};
