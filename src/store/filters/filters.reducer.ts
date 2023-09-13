import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EnumProductsSort } from "../product/types";
import { IFilterState, IFiltersActionsPayload } from "./type";

const initialState: IFilterState = {
  isFilterUpdated: false,
  categoryProdictsFilter: EnumProductsSort.NEWEST,
  categoryPath: "",
  queryParams: {
    sort: EnumProductsSort.NEWEST,
    searchTerm: "",
    page: 1,
    perPage: 8,
    ratings: "",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateQueryParam: (
      state,
      action: PayloadAction<IFiltersActionsPayload, string>
    ) => {
      const { key, value } = action.payload;
      const v = value as never;
      state.queryParams[key] = v;
      state.isFilterUpdated = true;
    },
    setCategoryProductFilter: (state, action: PayloadAction<string>) => {
      state.categoryProdictsFilter = action.payload;
      state.isFilterUpdated = true;
    },
    resetQueryParam: (state) => {
      state.isFilterUpdated = false;
    },
    setCategoryPath: (state, action: PayloadAction<string>) => {
      state.categoryPath = action.payload;
    },
  },
});
