import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import expenseData from "./Components/Expenses/expenseData";

function App() {
  const [enteredExpense, setExpense] = useState(expenseData);
  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [...prevState, expense];
    });
    // setExpense([...expenses, expense]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={enteredExpense} />
    </div>
  );
}

export default App;
