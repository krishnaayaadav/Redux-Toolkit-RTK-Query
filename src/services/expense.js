
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const expenseApi = createApi({

    reducerPath: 'expenseApi',

    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000'}),

    endpoints: (builder) => ({
        // get all-expense-objects
        getAllExpense: builder.query({
            query: () => ({
                url: '/expense/api/expense/',
                method: 'GET',
            })
        }),

        // get single expense details
        getExpenseDetails: builder.query({
            query: (expId) => ({
                url: `/expense/api/expense/details/${expId}/`,
                method: 'GET',

            })
        })
        
    })
})

export const { useGetAllExpenseQuery, useGetExpenseDetailsQuery } = expenseApi;