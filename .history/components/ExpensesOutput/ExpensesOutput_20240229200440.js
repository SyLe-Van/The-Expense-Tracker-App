import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constanst/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoe",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-15"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 12.03,
    date: new Date("2021-02-19"),
  },
  {
    id: "e5",
    description: "Some fruits",
    amount: 15.09,
    date: new Date("2021-02-18"),
  },
  {
    id: "e6",
    description: "Some apple",
    amount: 8.0,
    date: new Date("2021-12-02"),
  },
  {
    id: "e7",
    description: "A pencil",
    amount: 12.0,
    date: new Date("2021-04-21"),
  },
  {
    id: "e8",
    description: "Some fruits",
    amount: 10.0,
    date: new Date("2021-07-18"),
  },
];
function ExpensesOutput({ expenses, expensesPreiod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPreiod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
