import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Text,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import SubmitButton from "../components/SubmitButton";

export default function BackgroundSelection(props) {
  const { getAvatarBackground } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    if(!isEnabled){
        getAvatarBackground()
    }
    setIsEnabled((previousState) => !previousState);
  };

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  const handleImageSelection = (id) => {
    getAvatarByType(id);
    const test = selectedImage.map((item) =>
      item.id === id ? { ...item, display: true } : { ...item, display: false }
    );
    setSelectedImage(test);
  };

  const sectionHeight = windowHeight / 3;

  return (
    <View style={{ height: sectionHeight }}>
      <View style={styles.switch}>
        <Text style={styles.text}>Activer Background</Text>
        <Switch
          trackColor={{ false: "#CBD4C2", true: "#CBD4C2" }}
          thumbColor={isEnabled ? "#A2AA39" : "#212922"}
          ios_backgroundColor="#CBD4C2"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: "row",
    marginTop: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

BackgroundSelection.defaultProps = {
  source: "",
  format: 200,
};

BackgroundSelection.propTypes = {
  getAvatarByType: PropTypes.func.isRequired,
};
