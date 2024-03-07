import axios from "axios";
const BACKEND_URL =
  ' "https://expensemanagementapp-9defb-default-rtdb.asia-southeast1.firebasedatabase.app/"';
export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "expense.json", expenseData);
}

export function fetchExpenses() {
  axios.get(BACKEND_URL + "expense.json");
}
