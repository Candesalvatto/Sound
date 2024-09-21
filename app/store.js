import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../service/shop'
import authReducer from '../features/auth/authSlice'
import { authApi } from '../service/auth'
import { orderApi } from '../service/order'
import { userApi } from '../service/user'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth:authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware, orderApi.middleware, userApi.middleware),
})

setupListeners(store.dispatch)