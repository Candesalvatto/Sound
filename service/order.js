import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const orderApi = createApi({
    reducerPath:"ordersApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_FIREBASE}),
    tagTypes:["order"],
    endpoints:(builder) => ({

        getOrdersByUser: builder.query({
            query: (localId) => `/orders/${localId}.json`,
            transformResponse: (response) => {
              if (!response) return [];
              const data = Object.entries(response).map(([id, order]) => {
                const orderDetails = order["0"] || {}; 
                return {
                  id,
                  createdAt: orderDetails.createdAt || 'Fecha no disponible',
                  total: orderDetails.price || 'Precio no disponible',
                  name: orderDetails.title || 'Título no disponible',
                  image: orderDetails.image || 'Imagen no disponible',
                  ...orderDetails,
                };
              });
              return data;
            },
            providesTags: ["order"],
          }),
        getOrderByUser:builder.query({
            query:({localId,orderId}) => `/orders/${localId}/${orderId}.json`       
        }),
        postOrder:builder.mutation({
            query:({localId,order}) => ({
                url:`/orders/${localId}.json`,
                method:"POST",
                body:order
            }),
            invalidatesTags:["order"]
        })

    })
})



    export const {  
        usePostOrderMutation,
        useGetOrdersByUserQuery,
        useGetOrderByUserQuery
} = orderApi