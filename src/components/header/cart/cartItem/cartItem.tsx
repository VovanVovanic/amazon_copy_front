import { FC } from "react";
import classes from "./item.module.scss";
import cn from "classnames";
import { ICartItem } from "./types";
import Image from "next/image";
import CartActions from "./cartActions";

const CartItem: FC<ICartItem> = ({ item, className, ...rest }) => {
  return (
    <li className={cn(classes.item, className)} {...rest}>
      <Image
        src={item.product.images[0]}
        width={100}
        height={100}
        alt={item.product.name}
      />
      <div>
        <div className={cn(classes.name)}>{item.product.name}</div>
        <div className={cn(classes.price)}>Price: ${item.price}</div>
        <CartActions item={item} />
      </div>
    </li>
  );
};

export default CartItem;
