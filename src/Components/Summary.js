import React from 'react';


const Summary = ({ income, expense, balance }) => {
    const mySummary = {
        width: "40%",
    height: "250px",
    border: "3px solid black",
    marginLeft: "30%",
    textAlign: "center",
    fontSize: "20px",
    }
  return (
    <div className="summary" style={mySummary}>
      <h2>Summary</h2>
      <p>Total Income: Rs {income.toFixed(1)}</p>
      <p>Total Expenses: Rs {expense.toFixed(1)}</p>
      <p>Balance: Rs {balance.toFixed(1)}</p>
    </div>
  );
};

export default Summary;
