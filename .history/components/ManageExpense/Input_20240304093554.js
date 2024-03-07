import { TextInput, View, Text } from "react-native";

function Input({ label, textInputConfig, type }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput keyboardType={type} {...textInputConfig} />
    </View>
  );
}

export default Input;
