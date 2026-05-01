import { useState, useEffect } from 'react'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import './App.css'

function MainApp() {
  const [records, setRecords] = useState(() => {
    const storedData = localStorage.getItem("records")
    return storedData ? JSON.parse(storedData) : [];
  })

  // Store data in LocalStorage whenever records update
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records))
  }, [records])

  // Add new record
  const addRecord = (entry) => {
    setRecords((prevData) => [...prevData, entry])
  }

  // Remove record
  const removeRecord = (recordId) => {
    setRecords((prevData) => prevData.filter((data) => data.id !== recordId))
  }

  const totalAmount = records.reduce((acc, data) => acc + data.amount, 0)

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <TransactionForm onAdd={addRecord} />
      <h3 className="total">Total Spending: ₹{totalAmount.toFixed(2)}</h3>
      <TransactionList items={records} onRemove={removeRecord} />
    </div>
  )
}

export default MainApp