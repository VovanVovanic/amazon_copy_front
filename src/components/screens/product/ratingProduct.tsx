import { FC } from "react";

import { IProductPageRating } from "./types";
import Ratings from "@/components/catatalog/rating/ratings";
import { Link } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";

const RatingProduct: FC<IProductPageRating> = ({ product }) => {
  const length = product.reviews.length;
  if (!length) return null;

  return (
    <>
      <Ratings product={product} />
      <Link
        to="reviews"
        className="opacity-50 font-semibold text-sm cursor-pointer"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        {length} Reviews <FiChevronDown className="inline" />
      </Link>
    </>
  );
};
export default RatingProduct;
