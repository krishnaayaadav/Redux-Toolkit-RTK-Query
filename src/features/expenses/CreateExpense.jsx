
import { useAddNewExpenseMutation } from '../../services/expense';

const CreateExpense = ()=>{
    const [createExpense, response]  = useAddNewExpenseMutation();

    const {isError, isSuccess, status} = response;


    const expenseePayload = {
        exp_title: 'New expense of React Redux',
        exp_user: 'bhole',
        exp_description: 'Some expense description will be here ',
        exp_amount: 1000,
        exp_date: '2021-02-20'
    }

    if(isError){
        let {error} = response;
        console.log(error.data)
    }
    if(isSuccess){
        console.log(response.data)
    }
    
    return(
        <div className="create-expense">
            <h3>Add New Expense {response.isError} </h3>
            <button onClick={(e)=> {createExpense(expenseePayload)}}>Add New Expense</button>
        </div>

    )
}

export default CreateExpense;