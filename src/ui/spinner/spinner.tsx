import { FC } from "react";
import classes from "./spinner.module.scss";
import classNames from "classnames";
import Image from "next/image";
const Spinner: FC<{ position?: string }> = ({ position = "" }) => {
  return (
    <div
      className={classNames(classes.spinner, {
        [classes.left]: position === "left",
      })}
    >
      <Image height={100} width={100} alt="loading..." src="/spinner.svg" />
    </div>
  );
};

export default Spinner;
