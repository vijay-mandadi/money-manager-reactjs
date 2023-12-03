// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item, onDeleteItem} = props
  const {id, title, amount, type} = item

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        className="delete"
        data-testid="delete"
        type="button"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
