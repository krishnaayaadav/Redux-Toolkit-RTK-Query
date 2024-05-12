import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import ExpenseList from './services/expenses/ExpenseList';
import ExpenseDetails from './services/expenses/ExpenseDetails';
import DeleteExepense from './services/expenses/deleteExepense';
import CreateExpense from './services/expenses/CreateExpense';
import UpdateExpense from './services/expenses/UpdateExpense';

function App() {
  return (
      <header className="App-header">
        <Link to={'/expense'}>Go to expense page</Link>
        <Routes>
          <Route path='/expense' element={ <ExpenseList />} />
          <Route path='/expense/create/new/expense' element={ <CreateExpense />} />

          <Route path='/expense/details/id/:id' element={ <ExpenseDetails />} />
          <Route path='/expense/delete/id/:id' element={ <DeleteExepense />} />
          <Route path='/expense/update/id/:id' element={ <UpdateExpense />} />



        </Routes>
    
      </header>
  );
}

export default App;
