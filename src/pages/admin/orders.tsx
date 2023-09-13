import Categories from "@/components/screens/categories/categories";
import Orders from "@/components/screens/orders/orders";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { NextPage } from "next";

const OrdersPage: NextPage = () => {
  return (
    <Meta title="Orders Admin Page">
      <Layout>
        <Orders />
      </Layout>
    </Meta>
  );
};

export default OrdersPage;
