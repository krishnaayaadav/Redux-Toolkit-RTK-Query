
import { Routes, Route } from 'react-router-dom';

import CreateExpense from './CreateExpense';
import ExpenseDetails from './ExpenseDetails';
import ExpenseList from './ExpenseList';
import UpdateExpense from './UpdateExpense';
import DeleteExepense from './DeleteExepense';

const ExpenseeApp = ()=> {
    return(
        <div className="expense-app">
            <p>Welcome Crud using  Redux Toolkit RTK Query in React </p>
             <Routes>
                <Route path='/expense' element={ <ExpenseList />} />
                <Route path='/expense/create/new/expense' element={ <CreateExpense />} />

                <Route path='/expense/details/id/:id' element={ <ExpenseDetails />} />
                <Route path='/expense/delete/id/:id' element={ <DeleteExepense />} />
                <Route path='/expense/update/id/:id' element={ <UpdateExpense />} />

            </Routes> 
        </div>
    )
};

export default ExpenseeApp