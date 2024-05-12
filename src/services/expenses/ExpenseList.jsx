import { Link } from 'react-router-dom';

import { useGetAllExpenseQuery, useGetExpenseDetailsQuery } from '../expense';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ()=> {
    const response = useGetAllExpenseQuery();
    const { data, isError, isFetching, isSuccess, status  } = response;
    // const { results, count, next, previous } = data;


    // fetch errors
    if(isError){
        return(
            <div>
                <h1>Error Occured </h1>
                <h3>Status: {response.status} {response.status.codePointAt() } </h3>
                <p>Detail: {response.error.error} </p>
            </div>
        )
    }
    return (

        <div className="expense-list">
            {
                isFetching ? 
                    <>
                        Please Wait Data Is Still Loading

                    </>
                    
                :
                    <>
                        {
                            data ?
                                <div style={{'width': '70%', 'marginLeft': '25%'}}>
                        <br /> <Link to={'/expense/create/new/expense'}> Create New Expense</Link>


                                 {
                                    data.results.map( expense => (
                                        <ExpenseItem expense ={expense} key={expense.pk} />
                                    ) )
                                 }
                                </div>
                            : 
                                <> </>
                        }

                    
                    </>
                    
                    
                    
            }
           
        </div>
    )

}

export default ExpenseList;