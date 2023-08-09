import { NextPageAuth } from "@/providers/authProviders/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"

const AddProduct: NextPageAuth = () => {

  return (
    <Meta title="Product Admin Add Page">
      <Layout >
        <div>Add Product</div>
      </Layout>
    </Meta>

  )
}
AddProduct.isAdmin = true
export default AddProduct