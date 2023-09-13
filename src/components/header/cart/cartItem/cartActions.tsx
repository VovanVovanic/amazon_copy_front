import { ICart } from "../types";
import classes from "./cartAction.module.scss";
import cn from "classnames";
import { FC, useEffect } from "react";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";

import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";

const CartActions: FC<{ item: ICart }> = ({ item }) => {
  const { removeFromCart, changeQuantity } = useActions();
  const { items } = useCart();

  const quantity = items.find((el) => el.id === item.id)?.quantity;

  const onQuantityHandler = (type: "minus" | "plus", id: number) => {
    changeQuantity({ id, type });
  };

  useEffect(() => {
    if (!quantity) {
      removeFromCart({ id: item.id });
    }
  }, [item.id, quantity, removeFromCart]);

  return (
    <div className={cn(classes.actions)}>
      <div className={cn(classes.buttons)}>
        <button
          onClick={() => onQuantityHandler("minus", item.id)}
          //disabled={quantity === 1}
        >
          <FiMinus fontSize={13} />
        </button>
        <input
          disabled
          readOnly
          value={quantity}
          className={cn(classes.input)}
        />
        <button
          onClick={() => onQuantityHandler("plus", item.id)}
          //disabled={quantity === 1}
        >
          <FiPlus fontSize={13} />
        </button>
        <button
          onClick={() => removeFromCart({ id: item.id })}
          className={cn(classes.remove)}
        >
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default CartActions;
