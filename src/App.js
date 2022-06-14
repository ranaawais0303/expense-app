import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import expenseData from "./Components/Expenses/expenseData";

function App() {
  const [enteredExpense, setExpense] = useState(expenseData);

  //Add new Expense logic
  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [expense, ...prevState]; //add new at first place
      //[...prevState,expense];//add new at last place
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
