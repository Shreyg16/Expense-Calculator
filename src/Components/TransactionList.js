import React from 'react';

const TransactionList = ({ transactions, editTransaction, deleteTransaction }) => {
    const myList = {
        width: "40%",
        height: "350px",
        border: "3px solid black",
        marginLeft: "30%",
        textAlign:"center",
        fontSize: "20px",
        marginTop: "30px",
        boxSizing:"border-box"
      }
      const delBtn = {
       marginLeft:"20px",
       width:"20%",
       height:"30px",
    textAlign:"center",
    cursor:"pointer",
    borderRadius:"20px 20px 20px 20px",
    backgroundColor:"rgb(241, 32, 66)",
    border:"none",
    fontWeight:"bold",
    color:"white",
      }
  return (
    <div className="transaction-list" style={myList}>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>{transaction.date} - {transaction.category}: Rs {transaction.amount} ({transaction.type})</span>
            <button style={delBtn} onClick={() => deleteTransaction(index)}>Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
