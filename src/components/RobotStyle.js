import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function RobotStyle(props) {
  const { getAvatarByType } = props;
  const isImageSelected = true;

  return (
    <View style={styles.carrousel}>
      <TouchableOpacity
        onPress={() => getAvatarByType(1)}
        //style={[styles.item, style]}
      >
        <Image
          style={isImageSelected === true ? styles.selected : styles.unselected}
          source={require("../../assets/generate1.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => getAvatarByType(2)}
        //style={[styles.item, style]}
      >
        <Image
          style={isImageSelected === true ? styles.selected : styles.unselected}
          source={require("../../assets/generate2.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getAvatarByType(3)}>
        <Image
          style={isImageSelected === true ? styles.selected : styles.unselected}
          source={require("../../assets/generate3.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getAvatarByType(4)}>
        <Image
          style={isImageSelected === true ? styles.selected : styles.unselected}
          source={require("../../assets/generate4.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles applied when images are selected
  carrousel: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  selected: {
    backgroundColor: "grey",
    margin: 8,
    width: 100,
    height: 100,
  },
  unselected: {
    backgroundColor: "#EBEEE7",
    margin: 8,
    borderColor: "black",
    borderWidth: 1,
    width: 100,
    height: 100,
  },
});

RobotStyle.defaultProps = {
  source: "",
  format: 200,
};

RobotStyle.propTypes = {
  getAvatarByType: PropTypes.func.isRequired,
};
