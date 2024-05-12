
import { useUpdateExpenseMutation } from '../expense';
import { useParams } from 'react-router-dom';

const UpdateExpense = ()=> {
    const params = useParams();
    const {id}   = params;
    const [updateExpense, response] = useUpdateExpenseMutation();

    const expensePayload = {
        exp_title: 'Car Service Update Expense Title',
        pk: 100
    }

    if(response.isError || response.isSuccess){
        console.log(response.data)

        if(response.isError){
            console.log(response.error.data)
        }
    }

    return(
        <div className="update-expense">
            <h3>Update Expense id:  </h3>
            <button onClick={(e) => {updateExpense(expensePayload)}} >Update Expense </button>
        </div>
    )
};
export default UpdateExpense;