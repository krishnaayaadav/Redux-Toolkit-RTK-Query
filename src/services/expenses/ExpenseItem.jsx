

import { Link } from 'react-router-dom';
import './ExpenseItem.css';

const ExpenseItem = (props)=> {
    const { expense } = props;

    return (
        <div className="expense-item">
            <p>Id:     {expense.pk} User: {expense.exp_user}  </p>
            <h3>Title: {expense.exp_title} </h3>
            <p>Description: {expense.exp_description} </p>

            <Link to={`/expense/details/id/${expense.pk}`} >Read More</Link> <br />
            <Link to={`/expense/delete/id/${expense.pk}`} >Delete Expense</Link> <br />
            <Link to={`/expense/update/id/${expense.pk}`} >Update Expense</Link>



        </div>
    )
};

export default ExpenseItem