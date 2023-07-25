import { IOrder } from "../order/order.types"
import { IProduct } from "../product/types"

export interface IUser{
 id: number
 email: string
 name: string
 avatarPath: string
 phone: string
 isAdmin?:boolean
}

export interface IFullUser extends IUser{
 favorites: IProduct[]
 orders: IOrder[]
}
export interface IUserState{
 email: string
 isAdmin?:boolean
}

export interface UserUpdate{
 email?: string
 password?: string
 name?: string
 avatarPath?: string
 phone?: string
}

export interface ITokens{
 accessToken: string
 refreshToken:string
}

export interface IInitialState{
 user:IUserState | null
 isLoading:boolean
}

export interface IEmailPassword{
 email: string
 password:string
}

export interface IAuthResponse extends ITokens{
 user: IUser 
}

export enum IAuthVariants{
 LOGIN = 'login',
 REGISTER='register'
}