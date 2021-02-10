import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function TagButton(props) {
  const { text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  buttonText: {
    fontSize: 16,
    color: "#CBD4C2",
    textTransform: "uppercase",
  },
});

TagButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
