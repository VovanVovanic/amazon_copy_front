import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISearch
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  variant: string;
}
