import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICheck
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isChecked: boolean;
  onClick: () => void;
}
