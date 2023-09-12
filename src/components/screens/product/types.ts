import { IProduct } from "@/store/product/types";

export interface IProductPage {
    product: IProduct
    similar: IProduct[]
    productId?: string
    isInfo: boolean
    isSimilar: boolean
}

export interface IProductPageRating extends Pick<IProductPage, 'product'> { }