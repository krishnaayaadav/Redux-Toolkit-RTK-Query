import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// creating expense-api slice

const expenseApi = createApi({
    reducerPath: 'expenseApi', //reducerPath is unique key that define that redux store will store cache at which position
    baseQuery: fetchBaseQuery({ // fetchBaseQuery: is request fetch wrapper just like axios which handle request and response parsing
        baseUrl: 'http://127.0.0.1:8000'
    }),
    
    // actions while making request to server
    endpoints: (builder) => {
        getAllExpense: builder.query({
            query: () => ({
                url: '/expense/api/expense/',
                method: 'GET',
                 
            })
        })
        
        
    }
    
})

export const { useExpenseApiQuery } = expenseApi;