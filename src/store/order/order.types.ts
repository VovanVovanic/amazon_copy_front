import { ICart } from "../cart/types"
import { IUser } from "../user/types"

export enum EnumOrderStatus {
 PENDING = 'pending',
 PAYED="payed",
 SHIPPED="shipped",
 DELIVERED="delivered"
}

export interface IOrder{
 status: EnumOrderStatus
 id: number
 createdAt: string
 items: ICart[]
 user: IUser
}