import { IProduct } from "@/store/product/types";
import { ButtonHTMLAttributes } from "react";

export interface ICartButton extends ButtonHTMLAttributes<HTMLButtonElement>{
 product:IProduct
}