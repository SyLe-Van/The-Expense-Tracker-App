import { Pressable } from "react-native";
function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{description}</Text>
          <Text>{amount}</Text>
        </View>
        <View>
          <Text>{date}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;
