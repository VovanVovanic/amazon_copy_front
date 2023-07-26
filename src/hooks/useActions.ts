import { carouselSlice } from './../store/carousel/reducer';
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import * as userAction from '../store/user/actions'
import { cartSlice } from '../store/cart/cart.reducer'
import { filtersSlice } from '@/store/filters/filters.reducer';



const allActions = {
 ...userAction,
 ...cartSlice.actions,
 ...carouselSlice.actions,
 ...filtersSlice.actions
}


export const useActions = () => {
 const dispatch = useDispatch()

 return useMemo(()=>bindActionCreators(allActions, dispatch),[dispatch])
}