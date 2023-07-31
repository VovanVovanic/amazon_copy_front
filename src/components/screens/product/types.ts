import { IProduct } from "@/store/product/types";

export interface IProductPage{
    product:IProduct
    similar:IProduct[]
    slug?:string
}

export interface IProductPageRating extends Pick<IProductPage, 'product'>{}