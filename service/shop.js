import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    tagTypes:["userImage","userLocation","order"],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "/categories.json"
        }),
        getEvents: builder.query({
            query: () => "/events.json"
        }),
        getEventsByCategory: builder.query({
            query: (category) => `/events.json?orderBy="category"&equalTo="${category}"`,
            transformResponse:(response) =>{
                const data = Object.values(response)
                return data
            }
        }),
        getEventById: builder.query({
             query: (id) => `/events/${id}.json`,

          }),

    }),
  })
  

  export const { useGetCategoriesQuery, 
    useGetEventsQuery, 
    useGetEventsByCategoryQuery,
     useGetEventByIdQuery,

     } = shopApi

