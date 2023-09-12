import Categories from "@/components/screens/categories/categories"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { NextPage } from "next"

const CategoriesPage: NextPage = () => {

  return (
    <Meta title="Categories Admin Page">
      <Layout >
        <Categories />
      </Layout>
    </Meta>

  )
}

export default CategoriesPage