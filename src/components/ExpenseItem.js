import React from 'react';
import './ExpenseItem.css';
export default function ExpenseItem(props) {
  const expenseDate = new Date(2021,2,28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const {title,amount, date} = props;
  return (
   <div className="expense-item">
     <div>{date.toDateString()}</div>
     <div className="expense-item__description">
       <h2>{title}</h2>
       <div className="expense-item__price">{amount}</div>
     </div>
   </div>
  )
}
