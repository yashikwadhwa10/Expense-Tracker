import { useState, useEffect, useRef } from 'react'

function TransactionForm({ onAdd }) {
    const [itemName, setItemName] = useState("")
    const [value, setValue] = useState("")
    const inputRef = useRef();

    // Function to create new transaction and pass it upward
    const submitHandler = (e) => {
        e.preventDefault();

        if (!itemName || !value) return alert("Please fill all fields!")

        const newRecord = {
            id: Date.now(),
            name: itemName,
            amount: parseFloat(value)
        }

        onAdd(newRecord)
        setItemName("")
        setValue("")
        inputRef.current.focus();
    }

  return (
    <form className="expense-form" onSubmit={submitHandler}>
        <input 
            placeholder="Item Name" 
            type="text" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)}
            ref={inputRef}
        />
        <input 
            placeholder="Value ₹" 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Item</button>
    </form>
  )
}

export default TransactionForm