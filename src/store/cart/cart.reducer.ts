import { products } from '@/app/app.endpoints';
import { IAddToCart, ICart, ICartInitialState, IChangeQuantityPayload } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState:ICartInitialState = {
 items:[]
}

export const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
  addToCart: (state, action: PayloadAction<IAddToCart>) => {
   const isExist = state.items.some((el:ICart) => el.product.id === action.payload.product.id)
   
   if (!isExist) {
    state.items.push({ ...action.payload, id:state.items.length })
   }
  },
  removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
   state.items = state.items.filter((el)=>el.id !== action.payload.id)
  },
  changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
   const { id, type } = action.payload
   const item = state.items.find((el) => el.id === id)
   if(item) type === 'plus' ? item.quantity++ : item.quantity--
  },
  reset: state=>{state.items = []}
 }
})