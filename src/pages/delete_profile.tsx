import DeleteProfile from "@/components/screens/deleteProfile/deleteProfile";
import EditProfileForm from "@/components/screens/profileEditForm/editProfile";
import { useProfile } from "@/hooks/querries/useProfile";
import { NextPageAuth } from "@/providers/authProviders/types";
import { UserUpdate } from "@/store/user/types";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";

const DeleteProfilePage: NextPageAuth = () => {
  const { profile } = useProfile();
  const data: UserUpdate = {
    email: profile?.email,
    name: profile?.name,
    password: "",
    phone: profile?.phone,
  };
  return (
    <Meta title="Delete Profile Page">
      <Layout>
        <DeleteProfile id={String(profile?.id)} name={profile?.name} />
      </Layout>
    </Meta>
  );
};

DeleteProfilePage.isOnlyUser = true;
export default DeleteProfilePage;
