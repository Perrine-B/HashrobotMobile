import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";

export default function RobotStyle(props) {
  const { getAvatarByType } = props;
  const [selectedImage, setSelectedImage] = useState([
    {
      id: 1,
      name: "robot",
      display: false,
      url: require("../../assets/generate1.png"),
    },
    {
      id: 2,
      name: "monster",
      display: false,
      url: require("../../assets/generate2.png"),
    },
    {
      id: 3,
      name: "compact",
      display: false,
      url: require("../../assets/generate3.png"),
    },
    {
      id: 4,
      name: "cat",
      display: false,
      url: require("../../assets/generate4.png"),
    },
  ]);

  const handleImageSelection = (id) => {
    getAvatarByType(id);
    const test = selectedImage.map((item) =>
      item.id === id ? { ...item, display: true } : { ...item, display: false }
    );
    setSelectedImage(test);
  };

  function Carrousel() {
    if (selectedImage.length !== 0) {
      return selectedImage.map((image) => {
        return (
          <TouchableOpacity
            key={image.index}
            onPress={() => handleImageSelection(image.id)}
          >
            <Image
              style={
                image.display === true ? styles.selected : styles.unselected
              }
              source={image.url}
            />
          </TouchableOpacity>
        );
      });
    }
    return (
      <ActivityIndicator style={{ height: 200 }} size="small" color="#A2AA39" />
    );
  }

  return (
    <View style={styles.carrousel}>
      <Carrousel></Carrousel>
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

// return(
//    <Text>{image.name}</Text>

// )
