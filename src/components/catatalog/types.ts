import { IProduct, TypePaginationProducts } from "@/store/product/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICatalog extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
 products: IProduct[]
 paginationLength?: number
 title?: string
 refetch?:()=>void
}