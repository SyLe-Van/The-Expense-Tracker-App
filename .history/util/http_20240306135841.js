import axios from "axios";
export function storeExpense(expenseData) {
  axios.post(
    "https://expensemanagementapp-9defb-default-rtdb.asia-southeast1.firebasedatabase.app/",
    expenseData
  );
}
