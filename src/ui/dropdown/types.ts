import { EnumProductsSort } from "@/store/product/types"

export interface IDrop{
 onSelect: (data: string) => void
 items:{value:EnumProductsSort, label:string}[]
}
export interface ISortType{
 value: EnumProductsSort,
 label: string
}