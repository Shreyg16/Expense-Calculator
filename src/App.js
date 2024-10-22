import React, { useState, useEffect } from 'react';
import TransactionForm from './Components/TransactionForm';
import TransactionList from './Components/TransactionList';
import Summary from './Components/Summary';
import ExpenseChart from './Components/ExpenseChart';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState(() => {
    
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const editTransaction = (index, updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction, i) =>
      i === index ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="App">
      <h1 className='heading'>EXPENSE TRACKER</h1>
      <Summary income={totalIncome} expense={totalExpense} balance={balance} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        editTransaction={editTransaction}
        deleteTransaction={deleteTransaction}
      />
      <ExpenseChart income={totalIncome} expense={totalExpense} />
    </div>
  );
}

export default App;
