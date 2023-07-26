import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { EnumProductsSort } from "../product/types"
import { IFilterState, IFiltersActionsPayload } from "./type"

const initialState: IFilterState = {
 isFilterUpdated: false,
 queryParams: {
  sort: EnumProductsSort.NEWEST,
  searchTerm: "",
  page: 1,
  perPage: 10,
  ratings: ""
 }
}

export const filtersSlice = createSlice({
 name: "filters",
 initialState,
 reducers: {
  updateQueryParam: (state, action:PayloadAction<IFiltersActionsPayload>) => {
   const { key, value } = action.payload
   console.log(key)
   //state.queryParams[key] = value
   state.isFilterUpdated=true
  },
  resetQueryParam: (state) => {
   state.isFilterUpdated = false
  }
 }
})