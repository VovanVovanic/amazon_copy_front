import EditProfileForm from "@/components/screens/profileEditForm/editProfile";
import { useProfile } from "@/hooks/querries/useProfile";
import { NextPageAuth } from "@/providers/authProviders/types";
import { UserUpdate } from "@/store/user/types";
import Heading from "@/ui/heading/heading";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";

const EditProfilePage: NextPageAuth = () => {
  const { profile } = useProfile();
  const data: UserUpdate = {
    email: profile?.email,
    name: profile?.name,
    password: "",
    phone: profile?.phone,
  };
  return (
    <Meta title="Edit Profile Page">
      <Layout>
        <EditProfileForm profile={data} />
      </Layout>
    </Meta>
  );
};

EditProfilePage.isOnlyUser = true;
export default EditProfilePage;
