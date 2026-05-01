import { useState, useEffect } from 'react'
import TransactionItem from './TransactionItem'

function TransactionList({ items, onRemove }) {
    if (items.length === 0) {
        return <p className='no-expense'>No Records Available</p>
    }

    return (
        <div className="expense-list">
            {items.map((entry) => (
                <TransactionItem key={entry.id} data={entry} onRemove={onRemove} />
            ))}
        </div>
    )
}

export default TransactionList