import { Link } from 'react-router-dom';

import ExpenseeApp from './features/expenses/ExpenseApp';

import './App.css';


function App() {
  return (
      <header className="App-header">
        <Link to={'/expense'}>Go to expense page</Link>
        <ExpenseeApp />
        
    
      </header>
  );
}

export default App;
