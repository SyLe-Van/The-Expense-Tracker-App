import { Text } from "react-native";
function ManageExpense({ route }) {
  const editedExpenseId = route.params?.expenseId;
  return <Text>ManageExpense Screen</Text>;
}
export default ManageExpense;
