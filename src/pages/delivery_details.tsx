import Delivery from "@/components/screens/delivery/delivery";
import { NextPageAuth } from "@/providers/authProviders/types";
import Order from "@/services/orders/orders.service";
import Heading from "@/ui/heading/heading";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useMemo } from "react";

const DeliveryDetailsPage: NextPage = () => {
  return (
    <Meta title="Delivery Details">
      <Layout>
        <Heading className="md-custom:pt-10">Delivery Details</Heading>
        <Delivery />
      </Layout>
    </Meta>
  );
};

export default DeliveryDetailsPage;
