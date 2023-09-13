import Profile from "@/components/screens/profile/profile";
import { useProfile } from "@/hooks/querries/useProfile";
import { NextPageAuth } from "@/providers/authProviders/types";
import Order from "@/services/orders/orders.service";
import { UserUpdate } from "@/store/user/types";
import Heading from "@/ui/heading/heading";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const MyProfilePage: NextPageAuth = () => {
  const { profile } = useProfile();
  const data: UserUpdate = {
    email: profile?.email,
    name: profile?.name,
    password: "",
    phone: profile?.phone,
  };
  return (
    <Meta title="My Orders Page">
      <Layout>
        <div className="w-full flex flex-col items-center gap-10 md-custom:pt-10">
          <Heading>My Profile</Heading>
          <Profile profile={data} />
        </div>
      </Layout>
    </Meta>
  );
};

MyProfilePage.isOnlyUser = true;
export default MyProfilePage;
