import { NextPageAuth } from "@/providers/authProviders/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { GetStaticProps } from "next";
import EditProductPage from "@/components/screens/editProduct/editProduct"
import Category from "@/services/caterory/category.service"
import { ICategorySelect, IProductAction } from "@/components/screens/editProduct/types"

const AddProduct: NextPageAuth<{ categories:ICategorySelect[]}> = ({ categories}) => {

  return (
    <Meta title="Product Admin Add Page">
      <Layout >
					<EditProductPage
						categories={categories}
						variant={IProductAction.Add}
					/>
      </Layout>
    </Meta>

  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

	const {data:res} = await Category.getAllCategories()
	const categories = res?.map((el) => {
		return {id:el.id, name:el.name}
	})

	return {
		props: {
			categories
		}
	};
};
AddProduct.isAdmin = true
export default AddProduct