import React from "react";
import { View, Dimensions } from "react-native";
import SubmitButton from "../components/SubmitButton";
import PropTypes from "prop-types";

export default function RandomSelection(props) {
  const { getRandomAvatar } = props;
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  return (
    <View style={{ width: windowWidth }}>
      <SubmitButton text={"Choisir un autre robot"} onPress={getRandomAvatar} />
    </View>
  );
}

RandomSelection.propTypes = {
  getRandomAvatar: PropTypes.func.isRequired,
};
