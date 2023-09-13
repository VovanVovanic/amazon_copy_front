import { useTypedSelector } from "./useTypedSelector";

export const useCart = () => {
  const items = useTypedSelector((state) => state.cart.items);

  const total = items.reduce((acc, el) => {
    acc += el.price * el.quantity;
    return acc;
  }, 0);
  return { items, total };
};
