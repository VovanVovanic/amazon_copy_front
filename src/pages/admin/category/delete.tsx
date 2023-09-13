import { NextPageAuth } from "@/providers/authProviders/types";
import Layout from "@/ui/layout/layout";
import Meta from "@/ui/meta/meta";

const DeleteCategory: NextPageAuth = () => {
  return (
    <Meta title="Categories Admin Delete Page">
      <Layout>
        <div>Delete Category</div>
      </Layout>
    </Meta>
  );
};
DeleteCategory.isAdmin = true;
export default DeleteCategory;
