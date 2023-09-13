import Dashboard from "@/components/screens/dashboard/dashboard";
import { NextPageAuth } from "@/providers/authProviders/types";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";

const AdminPage: NextPageAuth = () => {
  return (
    <Meta title="Admin Page">
      <Layout>
        <Dashboard />
      </Layout>
    </Meta>
  );
};

AdminPage.isAdmin = true;

export default AdminPage;
