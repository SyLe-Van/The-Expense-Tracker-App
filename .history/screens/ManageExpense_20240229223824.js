import { useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constanst/styles";
function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      {isEditing && (
        <IconButton icon="trash" color={GlobalStyles.colors.error500} />
      )}
    </View>
  );
}
export default ManageExpense;
