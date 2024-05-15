import { useState } from "react";
// import DropDownPicker from "react-native-dropdown-picker";
import { TextInput, View, StyleSheet } from "react-native";

function LegacyDropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      style={{
        ...styles.container,
        borderColor: "#2A2D74",
        borderWidth: 2,
        width: 120,
      }}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Select"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
});

export default LegacyDropDown;
