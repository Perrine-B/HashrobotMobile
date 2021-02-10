import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function SubmitButton(props) {
  const { text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: "#CBD4C2",
    textTransform: "uppercase",
  },
  appButtonContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#0E6BA8",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
});

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
