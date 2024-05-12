
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
            query: (expId) => {
                console.log(expId)// this is way to check expId
                return{  url: `/expense/api/expense/details/${expId}/`,
                         method: 'GET'
                }
            }
        }),

        deleteExpense: builder.mutation({
            query: (expId) => ({
                url: `/expense/api/expense/delete/${expId}/`,
                method: 'DELETE'
            })
        }),

        // add-new expense
        addNewExpense: builder.mutation({
            query: (expensePayload) => ({
                url: '/expense/api/expense/add/',
                method: 'POST',
                body: expensePayload,
                headers: {
                    'Content-Type': 'application/json'
                    
                }
                
            })
        })

      

        
    })
})

export const { useGetAllExpenseQuery, useGetExpenseDetailsQuery, useDeleteExpenseMutation, useAddNewExpenseMutation  } = expenseApi;