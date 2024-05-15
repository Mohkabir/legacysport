import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { globalStyle } from "../../styles";

const Store = () => {
  return (
    <View style={{ ...globalStyle.container }}>
      <Text>Store</Text>
    </View>
  );
};

const style = StyleSheet.create({
  //   textColor: {
  //     color: color,
  //   },
});

export default Store;
