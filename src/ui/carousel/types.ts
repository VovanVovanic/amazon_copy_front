import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICarouselItem {
  title: string;
  description: string;
  url?: string;
  link?: string;
  id: number;
}

export interface ICarousel
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  items: ICarouselItem[];
}
