import axios from "axios";
const BACKEND_URL =
  ' "https://expensemanagementapp-9defb-default-rtdb.asia-southeast1.firebasedatabase.app"';
export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expense.json", expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expense.json");
  const expenses = [];
  console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenseObj.push();
  }
  return expenses;
}
