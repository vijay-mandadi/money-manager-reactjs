// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <ul className="details-container">
      <li className="listitem-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="paragraph">Your Balance</p>
          <p data-testid="balanceAmount" className="balance">
            RS {balance}
          </p>
        </div>
      </li>
      <li className="listitem-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="paragraph">Your Income</p>
          <p data-testid="incomeAmount" className="balance">
            RS {income}
          </p>
        </div>
      </li>
      <li className="listitem-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="paragraph">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance">
            RS {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
