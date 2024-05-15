import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

const LegacyBtn = ({
  bg,
  title,
  handlePress,
  color,
  style,
  icon,
  size,
  disable,
}) => {
  return (
    <Pressable
      style={{
        ...styles.btn,
        ...style,
        backgroundColor: disable ? "#BABCBF" : bg ? bg : "#ffffff",
        color: color ? color : "#000000",
      }}
      onPress={!disable && handlePress}
    >
      <Text style={{ ...styles.text, color: color ? color : "#000000" }}>
        {icon && <Image style={styles.icon} source={icon} />}{" "}
        <Text style={{ fontSize: size ? size : 16 }}>{title}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    borderRadius: 10,
    cursor: "pointer",
    height: 67,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    display: "flex",
  },
  icon: {
    marginBottom: -2,
  },
});

export default LegacyBtn;
