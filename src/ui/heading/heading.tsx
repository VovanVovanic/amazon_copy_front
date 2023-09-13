import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import classes from "./heading.module.scss";
import { IHeading } from "./types";

const Heading: FC<PropsWithChildren<IHeading>> = ({
  title,
  children,
  className,
  ...rest
}) => {
  return (
    <h1 {...rest} className={cn(className, classes.heading)}>
      {children}
    </h1>
  );
};

export default Heading;
