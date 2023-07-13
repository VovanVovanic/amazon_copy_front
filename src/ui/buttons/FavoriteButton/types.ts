import { IProduct } from "@/store/product/types";
import { ButtonHTMLAttributes } from "react";

export interface IFavoriteButton extends ButtonHTMLAttributes<HTMLButtonElement>{
 productId:number
}