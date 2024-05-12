

import { useDeleteExpenseMutation } from '../../services/expense';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteExepense = ()=> {
    
    const params = useParams();
    const { id } = params;

    const [deletePost, res]    = useDeleteExpenseMutation()
    const {data, isError, isSuccess, status, originalArgs,} = res;

    console.log(isError, isSuccess, status, originalArgs)


  
    

    return(
        <div className="delete-content">
            <h3>Delete item here:  </h3>
            <button onClick={(e) => { deletePost(id)  }} >Click to delete</button>

        </div>
    )
};

export default DeleteExepense;