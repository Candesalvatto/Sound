import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"",
    idToken:"",
    localId:"",
    name:"",
    lastName: "",
    dni: ""
  }

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
       setUser: (state,action) =>{
            state.email = action.payload.email
            state.idToken = action.payload.idToken
            state.localId = action.payload.localId
            state.name = action.payload.name || state.name
            state.lastName = action.payload.lastName || state.lastName
            state.dni = action.payload.dni || state.dni
       },
       clearUser: (state) => {
        state.email = "",
        state.idToken = "",
        state.localId = "",
        state.name = "",
        state.lastName="",
        state.dni=""
       }
    
    }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer