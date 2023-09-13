import { FC } from "react";
import { IFilters } from "./types";
import classes from "./filters.module.scss";
import cn from "classnames";
import PriceGroup from "./priceGroup/priceGroup";
import RatingGroup from "./ratingsGroup/ratingGroup";
import CategoryGroup from "./categoryGroup/categoryGroup";

const Filters: FC<IFilters> = ({ className, ...rest }) => {
  return (
    <div {...rest} className={cn(className, classes.filters)}>
      <PriceGroup />
      <CategoryGroup />
      <RatingGroup />
    </div>
  );
};

export default Filters;
