import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function TagButton(props) {
  const { text, onPress, icon } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {icon !== null && icon}
      {icon === null && <Text style={styles.buttonText}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#212922",
    borderRadius: 8,
    height: 45,
    width: 60,
    margin: 4,
    padding: 10
  },
  buttonText: {
    fontSize: 16,
    color: "#CBD4C2",
    textTransform: "uppercase",
  },
});

TagButton.defaultProps = {
  text: '',
  icon: null,
};

TagButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
