import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
    total: 0,
    serviceCost: 0, 
    totalWithServiceCost: 0,
    title: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItemCart: (state, action) => {
        const {id, price, quantity, title, image, type} = action.payload
        const itemFound = state.items.find(item => item.id === id && item.type === type)
        itemFound ? itemFound.quantity += quantity : state.items.push({ id, price, quantity, title, image, type })
        if (!state.title) {
          state.title = title
        }
        state.total+= price * quantity
        state.serviceCost = state.total * 0.10
        state.totalWithServiceCost = state.total + state.serviceCost

      },
      clearCart:(state) => {
        state.items = [],
        state.total = 0,
        state.serviceCost = 0,
        state.totalWithServiceCost = 0 ,
        state.title = '' 
    },
    deleteItemFromCart: (state, action) => {
      const itemIdToDelete = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToDelete);
      state.total -= action.payload.price;
      state.serviceCost = state.total * 0.10;
      state.totalWithServiceCost = state.total + state.serviceCost;
    },
    },
  })
  

  export const { addItemCart, clearCart, deleteItemFromCart} = cartSlice.actions
  
  export default cartSlice.reducer