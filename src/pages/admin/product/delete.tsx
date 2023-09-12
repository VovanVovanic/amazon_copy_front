
import { NextPageAuth } from "@/providers/authProviders/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"

const DeleteProduct: NextPageAuth = () => {

  return (
    <Meta title="Product Admin Delete Page">
      <Layout >
        <div>Delete Product</div>
      </Layout>
    </Meta>

  )
}
DeleteProduct.isAdmin = true
export default DeleteProduct