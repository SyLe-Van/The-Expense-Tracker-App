import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constanst/styles";
function Button({ children, onPress, mode }) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={[styles.Button, mode === "flat" && styles.flat]}>
          <Text>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
