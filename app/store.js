import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/cart/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../service/shop'
import authReducer from '../features/auth/authSlice'
import { authApi } from '../service/auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth:authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)