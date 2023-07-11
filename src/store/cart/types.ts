import { IProduct } from "../product/types"

export interface ICart{
 id: number
 product: IProduct
 price: number
 quantity:number
}