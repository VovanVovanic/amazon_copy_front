import { IProduct } from "@/store/product/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICatalogItem extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
 product: IProduct
}