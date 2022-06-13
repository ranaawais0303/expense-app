import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 84.99,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 840.99,
      date: new Date(2022, 7, 20),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 220.99,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 29.99,
      date: new Date(2019, 5, 14),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
