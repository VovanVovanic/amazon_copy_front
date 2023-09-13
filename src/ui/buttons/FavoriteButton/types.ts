import { ButtonHTMLAttributes } from "react";

export interface IFavoriteButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  productId: number;
}
