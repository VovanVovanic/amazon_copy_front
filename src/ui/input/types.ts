import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | undefined;
  type?: string;
  Icon?: IconType;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IInput extends TypeInputPropsField {}
