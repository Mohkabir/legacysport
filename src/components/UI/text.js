import React from "react";
import { Text, StyleSheet } from "react-native";

const LagacyText = ({ value, styles, color, size, weight }) => {
  return (
    <Text
      style={{
        color: color ? color : "#000000",
        fontSize: size === "lg" ? 40 : size === "md" ? 30 : 14,
        fontWeight:
          weight === "bold" ? 700 : weight === "semi-bold" ? 600 : 400,
        ...styles,
      }}
    >
      {value}
    </Text>
  );
};

const style = StyleSheet.create({
  //   textColor: {
  //     color: color,
  //   },
});

export default LagacyText;
