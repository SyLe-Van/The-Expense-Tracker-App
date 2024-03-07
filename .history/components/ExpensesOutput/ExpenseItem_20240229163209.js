import { Pressable } from "react-native";
function ExpenseItem() {
  return (
    <Pressable>
      <View>
        <Text>Description</Text>
        <Text>Amount</Text>
        <Text>Date</Text>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;
