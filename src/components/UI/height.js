import React from "react";
import { View } from "react-native";

const LagacyHeight = ({ height }) => {
  return (
    <View
      style={{
        height: height ? height : 10,
      }}
    ></View>
  );
};

export default LagacyHeight;
