import { Text } from "react-native";
function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  navigation.setOptions({
    title: isEditing ? "Edit Expense" : "Add Expense",
  });
  return <Text>ManageExpense Screen</Text>;
}
export default ManageExpense;
