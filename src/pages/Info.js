import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

export default function Info() {
  const ref = useRef(null);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  const onPressFunction = () => {
    console.log("banane");
    // Scroll to the top of the screen when the button is clicked
    ref?.current?.scrollTo({x:0, y:0, animated:true});
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={{height : windowHeight}} alwaysBounceVertical={true} ref={ref}>
      <Text style={styles.title}>Choisissez un style</Text>
        <Text style={styles.text}>
            Je ne peux pas coller de lorem alors je vais improviser un texte
            random. Donc c'est l'histoire d'un type qui rentre dans un bar et
            ouf oufc 'est la fin de la blague. Sinon, voilà, je peux vous
            raconter ma life mais ça ne va pas être très interessant
          </Text>
          <Text style={styles.text}>
            Je ne peux pas coller de lorem alors je vais improviser un texte
            random. Donc c'est l'histoire d'un type qui rentre dans un bar et
            ouf oufc 'est la fin de la blague. Sinon, voilà, je peux vous
            raconter ma life mais ça ne va pas être très interessant
          </Text>
          <Text style={styles.text}>
            Je ne peux pas coller de lorem alors je vais improviser un texte
            random. Donc c'est l'histoire d'un type qui rentre dans un bar et
            ouf oufc 'est la fin de la blague. Sinon, voilà, je peux vous
            raconter ma life mais ça ne va pas être très interessant
          </Text>
          <Text style={styles.text}>
            Je ne peux pas coller de lorem alors je vais improviser un texte
            random. Donc c'est l'histoire d'un type qui rentre dans un bar et
            ouf oufc 'est la fin de la blague. Sinon, voilà, je peux vous
            raconter ma life mais ça ne va pas être très interessant
          </Text>
          <Text style={styles.text}>
            Je ne peux pas coller de lorem alors je vais improviser un texte
            random. Donc c'est l'histoire d'un type qui rentre dans un bar et
            ouf oufc 'est la fin de la blague. Sinon, voilà, je peux vous
            raconter ma life mais ça ne va pas être très interessant
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
            elit eu elit eleifend, a elementum justo auctor. Nullam vehicula
            varius erat, in laoreet leo interdum ut. Praesent eu erat massa.
            Curabitur fringilla tincidunt justo a fringilla. Aenean porttitor
            interdum enim id sodales. Aenean eget lectus ut arcu euismod
            pellentesque. Maecenas fringilla congue malesuada. Donec pretium
            nunc id posuere aliquam. Cras bibendum sapien quis odio lacinia
            dignissim. Curabitur fermentum dapibus metus, a tincidunt magna
            vestibulum eu. Nunc et molestie felis. Maecenas a mi egestas, semper
            nisi ut, finibus arcu. Curabitur varius lorem vehicula est convallis
            porta. Aliquam
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
            elit eu elit eleifend, a elementum justo auctor. Nullam vehicula
            varius erat, in laoreet leo interdum ut. Praesent eu erat massa.
            Curabitur fringilla tincidunt justo a fringilla. Aenean porttitor
            interdum enim id sodales. Aenean eget lectus ut arcu euismod
            pellentesque. Maecenas fringilla congue malesuada. Donec pretium
            nunc id posuere aliquam. Cras bibendum sapien quis odio lacinia
            dignissim. Curabitur fermentum dapibus metus, a tincidunt magna
            vestibulum eu. Nunc et molestie felis. Maecenas a mi egestas, semper
            nisi ut, finibus arcu. Curabitur varius lorem vehicula est convallis
            porta. Aliquam
          </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// Text Image button & scrollview
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    backgroundColor: 'white'
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 20
  },

  text: {
    color: "#815355",
    fontSize: 14,
    padding: 10,
  },

});