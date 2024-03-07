import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable>
      <View>
        <Ionicons onPress={onPress} name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;
