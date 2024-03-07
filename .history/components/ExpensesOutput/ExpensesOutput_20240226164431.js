import { FlatList, View, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
function ExpensesOutput({ expenses, expensesPreiod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPreiod} />
      <ExpensesList />
    </View>
  );
}
export default ExpensesOutput;
