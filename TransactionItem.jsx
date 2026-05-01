function TransactionItem({ data, onRemove }) {
  return (
    <div className="expense-item">
        <span>{data.name}</span>
        <span>₹{data.amount}</span>
        <button onClick={() => onRemove(data.id)}>❌</button>
    </div>
  )
}

export default TransactionItem