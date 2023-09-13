import classes from "./checkout.module.scss";
import CheckoutItem from "./checkoutItem";
import Order from "@/services/orders/orders.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, useEffect, useMemo, useState } from "react";

import CatalogItem from "@/components/catatalog/catalogItem/catalogItem";

import Button from "@/ui/buttons/button";
import Heading from "@/ui/heading/heading";

import { IProduct } from "@/store/product/types";

import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";

const CheckoutPage: FC<{ products: IProduct[] }> = ({ products }) => {
  const { items, total } = useCart();
  const { reset } = useActions();
  const { push } = useRouter();
  const [msg, setMsg] = useState<string>("Fill your cart first");

  const { mutate, isSuccess } = useMutation(
    ["create order and payment"],
    () =>
      Order.createPayment({
        items: items.map((el) => ({
          price: el.price,
          quantity: el.quantity,
          productId: el.product.id,
        })),
      }),
    {
      onSuccess({ data }) {
        push(data.confirmation.confirmation_url);
        reset();
      },
    }
  );
  useEffect(() => {
    if (isSuccess) {
      setMsg("");
    }
  }, [isSuccess]);
  const list = useMemo(() => {
    return items.map((el) => {
      return (
        <CheckoutItem key={el.id} product={el.product} amount={el.quantity} />
      );
    });
  }, [items]);

  const filteredCategory = products.filter((el) =>
    items.map((item) => item.product.category.name).includes(el.category.name)
  );

  return (
    <>
      {items.length ? (
        <section className={classes.checkout}>
          <div>
            <Heading className="mb-6 md-custom:pt-10 xl-custom:text-lg">
              Checkout
            </Heading>
            <ul className={classes.list}>{list}</ul>
            <div className={classes.footer}>
              <div className={classes.total}>
                <div>Total: ${total}</div>
              </div>
              <Button
                variant="dark"
                size="lg"
                className="mt-5 mb-2 sm-custom:hidden"
                onClick={() => mutate()}
              >
                Place Order
              </Button>
              <Button
                variant="dark"
                size="sm"
                className="mt-5 mb-2 sm:hidden"
                onClick={() => mutate()}
              >
                Place Order
              </Button>
            </div>
          </div>
          <div>
            <Heading className="mb-6 text-2xl xl-custom:text-lg">
              Recommended
            </Heading>
            <ul className={classes.recommended}>
              {filteredCategory
                .filter((el) => !items.map((i) => i.product.id).includes(el.id))
                .slice(0, 4)
                .map((p) => {
                  return <CatalogItem key={p.id} product={p} />;
                })}
            </ul>
          </div>
        </section>
      ) : (
        <div className="flex items-center mt-20 font-semibold text-2xl justify-center">
          {msg}
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
