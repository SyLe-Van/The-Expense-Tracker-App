import { TextInput, View } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput keyboardType={type} {...textInputConfig} />
    </View>
  );
}

export default Input;
