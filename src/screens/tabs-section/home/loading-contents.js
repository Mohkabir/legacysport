import { useEffect, useState } from "react";
import { Image, StyleSheet, Pressable, ScrollView, View } from "react-native";
import Modal from "react-native-modal";
import LagacyText from "../../../components/UI/text";
import { globalStyle } from "../../../styles";

export default function LoadingContents({ handleBack, navigation, goto }) {
  const loaderImg = require("../../../assets/loaderImg.png");
  const close = require("../../../assets/close.png");

  const handleGoToContent = () => {
    navigation.navigate(goto);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleGoToContent();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ ...styles.container }}>
      <View>
        <Pressable onPress={handleBack}>
          <Image source={close} />
        </Pressable>

        <View style={styles.imgBox}>
          <Image style={styles.imgStyle} source={loaderImg} />
        </View>

        <View style={styles.textBox}>
          <LagacyText
            size="md"
            weight="bold"
            value="Loading...."
            styles={{
              marginBottom: 10,
              marginTop: 10,
              color: "#2A2D74",
            }}
          />
          <LagacyText
            value="Exercises are secret weapon against injuries. Warm-up exercises get your muscles and joints ready for action, preventing any aches along the way. It boosts your strength, flexibility, and endurance"
            styles={{
              marginBottom: 10,
              marginTop: 10,
              color: "#585858",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    flex: 1,
    margin: 0,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingLeft: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  imgBox: {
    alignItems: "center",
    paddingTop: 60,
    // width: 200,
    // height: 400,
  },
  textBox: {
    alignItems: "center",
  },
});
