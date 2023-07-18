import { ButtonHTMLAttributes } from "react"
import { IconType } from "react-icons"

export interface IButtonSquare extends ButtonHTMLAttributes<HTMLButtonElement>{
    Icon:IconType
    onClickHandle: ()=>void
    number?: number
   }