

import { Link } from 'react-router-dom';
import './ExpenseItem.css';

const ExpenseItem = (props)=> {
    const { expense } = props;
    let detail_page_link = `/expense/details/id/${expense.pk}`;

    return (
        <div className="expense-item">
            <p>Id:     {expense.pk} User: {expense.exp_user}  </p>
            <h3>Title: {expense.exp_title} </h3>
            <p>Description: {expense.exp_description} </p>

            <Link to={detail_page_link} >Read More</Link>
            <Link to={`/expense/delete/id/${expense.pk}`} >Delete Expense</Link>


        </div>
    )
};

export default ExpenseItem