import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "dark" | "light";
  size?: "sm" | "md" | "lg" | "bt";
}
