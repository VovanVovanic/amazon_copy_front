import { ICategory } from "../category/types"
import { IReview } from "../reviews/types"

export interface IProduct{
 id: number
 name: string
 slug: string
 description: string
 price: string
 review: IReview[]
 images: string[]
category:ICategory
 createdAt: string
}

export interface IProductDetails{
 product:IProduct
}