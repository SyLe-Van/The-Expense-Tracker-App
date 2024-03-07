import { Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constanst/styles";

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

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.4,
  },
});
