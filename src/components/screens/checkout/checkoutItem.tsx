import classes from "./checkout.module.scss";
import Image from "next/image";
import { FC } from "react";

import { IProduct } from "@/store/product/types";
import { capitalize } from "@/utils/capitalize";

const CheckoutItem: FC<{ product: IProduct; amount: number }> = ({
  product,
  amount,
}) => {
  return (
    <li className={classes.item}>
      <Image
        height={100}
        width={100}
        src={product.images[0]}
        alt="product image"
        className="xs-custom:hidden"
      />
      <div className={classes.row}>
        <div className={classes.info}>
          <div>
            {capitalize(product.name)} ({amount} {amount > 1 ? "units" : "unit"}
            )
          </div>
          <div>{product.category.name}</div>
        </div>
        <div className={classes.price}>${+product.price * amount}</div>
      </div>
    </li>
  );
};

export default CheckoutItem;
