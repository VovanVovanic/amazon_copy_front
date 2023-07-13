import { IProduct } from "@/store/product/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IRatings extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
 product:IProduct
}