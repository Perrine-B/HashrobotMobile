import React from "react";
import { View, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Avatar(props) {
  const { url, format } = props;
  const image = {
    uri: url,
    width: format,
    height: format,
  };

  return (
    <View>
      <Image style={styles.avatar} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'black'
  }
});

Avatar.defaultProps = {
  source: "",
  format: 200,
};

Avatar.propTypes = {
  source: PropTypes.string,
  format: PropTypes.number,
};
