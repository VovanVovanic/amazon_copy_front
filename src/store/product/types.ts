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
 categoryId:number
}
export interface IProduct extends IProductData{
 id: number
 slug: string
 review: IReview[]
 category:ICategory
 createdAt: string
}

export interface IProductFilters extends IPagination{
 sort?: EnumProductsSort
 searchTerm?:string
}
export interface IProductDetails{
 product:IProduct
}