import { View, StyleSheet } from "react-native";
import Input from "./Input";
function ExpenseForm() {
  function amountChangeHandler() {}
  function dateChangeHandler() {}

  return (
    <View>
      <View style={styles.inpustRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCapitalize: 'none'
          //autocorrext: false
        }}
      />
    </View>
  );
}
export default ExpenseForm;

const styles = StyleSheet.create({
  inpustRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
