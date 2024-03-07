import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
function RecentExpenses() {
  // const expensesCtx = useContext(ExpensesContext);
  const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setFetchedExpenses(expenses);
    }
    getExpenses();
  }, []);
  const recentExpenses = fetchedExpenses.filter((expense) => {
    const today = new Date();

    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPreiod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
