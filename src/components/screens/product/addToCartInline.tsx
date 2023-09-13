import classes from "./product.module.scss";
import { FC } from "react";

import Button from "@/ui/buttons/button";

import { IProduct } from "@/store/product/types";

import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";

const AddToCartInline: FC<{ product: IProduct }> = ({ product }) => {
  const { removeFromCart, addToCart } = useActions();
  const { items } = useCart();

  const currentProduct = items.find((el) => el.product.id === product.id);
  return (
    <div className={classes.inlineBtn}>
      <Button
        className="sm-custom:hidden"
        onClick={() =>
          currentProduct
            ? removeFromCart({ id: currentProduct.id })
            : addToCart({
                product,
                quantity: 1,
                price: +product.price,
              })
        }
        variant="dark"
      >
        {currentProduct ? "Remove From Cart" : "Add To Cart"}
      </Button>

      <Button
        className="sm:hidden"
        size="bt"
        onClick={() =>
          currentProduct
            ? removeFromCart({ id: currentProduct.id })
            : addToCart({
                product,
                quantity: 1,
                price: +product.price,
              })
        }
        variant="dark"
      >
        {currentProduct ? "Remove From Cart" : "Add To Cart"}
      </Button>
    </div>
  );
};

export default AddToCartInline;
