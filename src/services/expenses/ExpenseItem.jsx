

import './ExpenseItem.css';

const ExpenseItem = (props)=> {
    const { expense } = props;

    return (
        <div className="expense-item">
            <p>Id:  {expense.pk} User: {expense.exp_user}  </p>
            <h3>Title: {expense.exp_title} </h3>
            <p>Description: {expense.exp_description} </p>

        </div>
    )
};

export default ExpenseItem