import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter to do..."
        // onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 60,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    padding: 8,
    marginBottom: 15,
    backgroundColor: "white",
  },
});
export default Input;
