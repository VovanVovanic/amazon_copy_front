import { IProduct } from "../product/types"

export interface ICart{
 id: number
 product: IProduct
 price: number
 quantity:number
}
export interface ICartInitialState{
 items: ICart[]
}

export interface IAddToCart extends Omit<ICart, 'id'> { }

export interface IChangeQuantityPayload extends Pick<ICart, 'id'>{
type: 'minus' | 'plus'
}

export type TypeSize = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI'

export interface IChangeSizePayload extends Pick<ICart, 'id'>{
 size: TypeSize
}