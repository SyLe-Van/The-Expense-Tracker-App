import { FlatList, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";

function renderExpenseItem(itemData) {
    return <Text>{itemData.item.}</Text>
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem}/>;
}
export default ExpensesList;
