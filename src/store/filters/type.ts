import { IProductFilters } from "../product/types"

export interface IFilterState{
 isFilterUpdated: boolean
 categoryPath:string
 categoryProdictsFilter:string
 queryParams: IProductFilters
}

export interface IFiltersActionsPayload{
 value: string
 key: keyof IProductFilters
}