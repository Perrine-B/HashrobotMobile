import React, {useState} from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";

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

  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

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
    <View style={{width: windowWidth, ...styles.carrousel}}>
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
    //paddingHorizontal: 10,
  },
  selected: {
    backgroundColor: "grey",
    margin: 8,
    width: 70,
    height: 70,
  },
  unselected: {
    backgroundColor: "#EBEEE7",
    margin: 8,
    borderColor: "black",
    borderWidth: 1,
    width: 70,
    height: 70,
  },
});

RobotStyle.defaultProps = {
  source: "",
  format: 200,
};

RobotStyle.propTypes = {
  getAvatarByType: PropTypes.func.isRequired,
};
