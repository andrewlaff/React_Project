import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //EXPENSES CONTENT

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} //this unique id allows react to know where each items should be placed and update list more efficiently
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        /> // mapping our array to jsx 'ExpenseItem' to make dynamic
      ))}
    </ul>
  );
};

export default ExpensesList;
