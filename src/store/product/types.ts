import { ICategory } from "../category/types"
import { IPagination } from "../pagination/types"
import { IReview } from "../reviews/types"

export enum EnumProductsSort{
 HIGH_PRICE = 'high-price',
 LOW_PRICE = "low-price",
 NEWEST = "newest",
 OLDEST = "oldest"
}
export interface IProductData{
 name: string
 description: string
 price: string
 images: string[]
 categoryId: number
 category:ICategory
}
export interface IProduct extends IProductData{
 id: number
 slug: string
 reviews: IReview[]
 createdAt: string
}

export interface IProductFilters extends IPagination{
 sort?: EnumProductsSort
 searchTerm?: string
 ratings: string
 min?: string
 max?: string
 categoryId?: string
}
export interface IProductDetails{
 product:IProduct
}

export type TypePaginationProducts = {
 length: number
 products:IProduct[]
}

export type TypeParamSlug = {
 slug?:string
}

export interface IPageSlugParam{
 params:TypeParamSlug
}