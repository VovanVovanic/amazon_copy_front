import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { ICheck } from "./types";
import classes from "./checkbox.module.scss";
import { BsCheck } from "react-icons/bs";

const Checkbox: FC<PropsWithChildren<ICheck>> = ({
  children,
  isChecked,
  onClick,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(classes.checkbox, className, {
        [classes.active]: isChecked,
      })}
      onClick={onClick}
    >
      <span
        className={cn("", {
          [classes.active]: isChecked,
        })}
      >
        {isChecked && <BsCheck style={{ color: "white" }} />}
      </span>
    </button>
  );
};
export default Checkbox;
