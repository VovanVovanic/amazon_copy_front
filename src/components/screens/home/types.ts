import { IProduct } from '@/store/product/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface IHome extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
 products:IProduct[]
}