import { ICart } from "@/store/cart/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICartItem extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    item: ICart
   }