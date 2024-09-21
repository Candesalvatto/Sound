import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_FIREBASE } from '../firebase/database'

export const userApi = createApi({
    reducerPath:"usersApi",
    baseQuery:fetchBaseQuery({baseUrl:URL_FIREBASE}),
    tagTypes:["userImage", "userProfile"],
    endpoints:(builder) => ({
        patchImageProfile:builder.mutation({
            query:({image,localId})=> ({
                url:`users/${localId}.json`,
                method:"PATCH",
                body:{image}
            }),
            invalidatesTags:["userImage"]
        }),
        getUser:builder.query({
            query:({localId})=> `users/${localId}.json`,
            transformResponse:(response) => {

                if(!response) return {image:"",}
                if(!response.image)  response.image = ""
                if(!response.profile)  response.profile = {}
             
                const data = Object.entries(response).map(item => ({id:item[0],...item[1]}))
                return {
                    ...response,
                }
            },
            providesTags:["userImage", "userProfile"]
        }),
        patchDataProfile:builder.mutation({
            query:({localId, name, lastName, dni})=> ({
                url:`users/${localId}.json`,
                method:"PATCH",
                body:{ name, lastName, dni }
            }),
            invalidatesTags:["userProfile"]
        })

    })
})


export const {  
    usePatchImageProfileMutation,
    useGetUserQuery,
    usePatchDataProfileMutation
} = userApi