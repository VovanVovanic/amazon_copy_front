import { useProfile } from "@/hooks/querries/useProfile";
import { NextPageAuth } from "@/providers/authProviders/types";
import Order from "@/services/orders/orders.service";
import { IFullUser } from "@/store/user/types";
import Heading from "@/ui/heading/heading";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const MyOrdersPage: NextPageAuth = () => {
  const { data: orders } = useQuery(
    ["my orders"],
    () => Order.getOrdersByUser(),
    { select: ({ data }) => data }
  );

  const list = useMemo(() => {
    return orders?.map((el) => {
      return (
        <li
          key={el.id}
          className="bg-white shadow-md flex gap-10 p-7 my-7 rounded-lg sm-custom:gap-4 sm-custom:text-base xs-custom:gap-3 xs-custom:text-sm xs-custom:p-4"
        >
          <span>{el.id}</span>
          <span>{el.status}</span>
          <span>{new Date(el.createdAt).toLocaleDateString()}</span>
          <span>${el.total}</span>
        </li>
      );
    });
  }, [orders]);
  return (
    <Meta title="My Orders Page">
      <Layout>
        <Heading className="md-custom:pt-10">My Orders</Heading>
        <ul>
          {orders?.length ? list : <li className="mt-10">Orders Not Found</li>}
        </ul>
      </Layout>
    </Meta>
  );
};

MyOrdersPage.isOnlyUser = true;

export default MyOrdersPage;
