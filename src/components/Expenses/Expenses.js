import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [date, setNewDate] = useState("2020");

  const saveDateHandler = (enteredDate) => {
    setNewDate(enteredDate);
  };
  const filterExpenses = props.items.filter(
    (filteredDate) => filteredDate.date.getFullYear().toString() === date
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeDate={saveDateHandler} selected={date} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
