import Products from "@/components/screens/products/products"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { NextPage } from "next"

const ProductsPage: NextPage = () => {

  return (
    <Meta title="Products Admin Page">
      <Layout >
        <Products />
      </Layout>
    </Meta>

  )
}

export default ProductsPage