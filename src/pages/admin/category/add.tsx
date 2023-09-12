import AddCategoryPage from "@/components/screens/addCategory/addCategoryPage"
import { NextPageAuth } from "@/providers/authProviders/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"

const AddCategory: NextPageAuth = () => {

  return (
    <Meta title="Categories Admin Add Page">
      <Layout >
        <AddCategoryPage />
      </Layout>
    </Meta>

  )
}
AddCategory.isAdmin = true
export default AddCategory