import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    endpoints: builder => ({
        getUsers: builder.query({
            query: (token) => {
                return {
                    url: 'users',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            }
        })
    })
})


export const {useGetUsersQuery} = apiSlice;