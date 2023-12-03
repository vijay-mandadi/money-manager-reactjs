import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onDeleteItem = id => {
    const {transactionList} = this.state
    const list = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: list})
  }

  submitTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const getType = transactionTypeOptions.filter(
      each => each.optionId === type,
    )
    const {displayText} = getType[0]
    const obj = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }

    this.setState(prev => ({
      transactionList: [...prev.transactionList, obj],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenses += each.amount
      }
    })
    return expenses
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balance = 0
    let income = 0
    let expenses = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {title, amount, type, transactionList} = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()
    const balance = this.getBalance()

    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} balance={balance} />
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.submitTransaction}>
            <h1 className="heading-2">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              id="title"
              className="input"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
              value={title}
            />
            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              id="amount"
              className="input"
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select
              id="type"
              className="input"
              value={type}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
          <div className="history-container">
            <h1 className="heading-2">History</h1>
            <ul className="transaction-table">
              <li className="table-header">
                <p className="table-header-cell">Title</p>
                <p className="table-header-cell">Amount</p>
                <p className="table-header-cell">Type</p>
              </li>
              {transactionList.map(each => (
                <TransactionItem
                  item={each}
                  key={each.id}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
