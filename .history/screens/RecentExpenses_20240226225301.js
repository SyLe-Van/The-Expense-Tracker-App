import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
function RecentExpenses() {
  return <ExpensesOutput expensesPreiod="Last 7 days" />;
}
export default RecentExpenses;
