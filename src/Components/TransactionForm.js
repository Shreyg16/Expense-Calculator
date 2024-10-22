
import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { type, amount, category, date, description };
    addTransaction(newTransaction);
    
    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
  };
  
  const myStyle = {
    width: "40%",
    height: "500px",
    border: "3px solid black",
    marginLeft: "30%",
    textAlign:"center",
    fontSize: "20px",
    marginTop: "30px",
    
  }
  const myOptions = {
alignItems:"center",
width:"55%",
height:"30px",
textAlign:"center",
marginLeft:"10px",
fontWeight:"bold",
fontSize:"20px",
  }
  const myAmt = {
    alignItems:"center",
    width:"53%",
    height:"20px",
    textAlign:"center",
    marginLeft:"10px",
    marginTop:"20px",
      }
      const myDis = {
        alignItems:"center",
        width:"90%",
        height:"100px",
        textAlign:"center",
        marginLeft:"10px",
        marginTop:"20px",
          }
    const myBtn = {
        width:"40%",
        height:"50px",
    textAlign:"center",
    marginLeft:"10px",
    marginTop:"40px",
    cursor:"pointer",
    borderRadius:"20px 20px 20px 20px",
    backgroundColor:"rgb(241, 32, 66)",
    border:"none",
    fontWeight:"bold",
    color:"white",
    }
  
  return (
    <div className='transaction-form' style={myStyle}>
    <form onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <select style={myOptions} value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select> <br />
      <input
        type="number"
        style={myAmt}
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      /> <br />
      <input
        type="text"
        style={myAmt}
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      /> <br />
      <input
        type="date"
        style={myAmt}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      /> <br />
      <input
        type="text"
        style={myDis}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> <br />
      <button style={myBtn} type="submit">Add Transaction</button>
    </form>
    </div>
  );
};

export default TransactionForm;
