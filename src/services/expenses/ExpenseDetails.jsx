
import { useParams, Link } from "react-router-dom";
import {  useGetExpenseDetailsQuery } from '../expense';



const ExpenseDetails = () => {
    const params   = useParams()
    const response = useGetExpenseDetailsQuery(params.id);
    const { data, isError, isFetching, isSuccess } = response;

    console.log(data)

    return(

        <div className="exp-details">
            <h3>Detail Page Of Expense Id: {params.id} </h3>

            <Link to={'/expense'}>See All Expense</Link>



        </div>
    )
};

export default ExpenseDetails;