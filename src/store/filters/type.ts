import { IProductFilters } from "../product/types"

export interface IFilterState{
 isFilterUpdated: boolean
 queryParams: IProductFilters
}

export interface IFiltersActionsPayload{
 value: string
 key: keyof IProductFilters
}