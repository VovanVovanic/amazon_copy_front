import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICarouselItem{
 title: string
 description: string
 image?: string
 link?:string
}

export interface ICarousel extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
 items:ICarouselItem[]
}