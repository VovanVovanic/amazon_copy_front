import { NextPageAuth } from "@/providers/authProviders/types"
import Products from "@/services/products/products.service"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { GetStaticPaths, GetStaticProps } from "next"
import { ByFeature, ICategory } from '@/store/category/types';
import { IProduct } from "@/store/product/types"
import EditProductPage from "@/components/screens/editProduct/editProduct"
import Category from "@/services/caterory/category.service"
import { ICategorySelect } from "@/components/screens/editProduct/types"

const EditProduct: NextPageAuth<{product:IProduct, categories:ICategorySelect[]}> = ({product, categories}) => {

  return (
    <Meta title="Product Admin Edit Page">
      <Layout >
					<EditProductPage
						product={product}
						categories={categories}
					/>
      </Layout>
    </Meta>

  )
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await Products.getAll();
	const paths = products.products.map(el => {
		return { params: { id: String(el.id)} };
	});
	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: product } = await Products.getProductByFeature(
		ByFeature.Id,
		params?.id as string
	);
	const {data:res} = await Category.getAllCategories()
	const categories = res?.map((el) => {
		return {id:el.id, name:el.name}
	})

	return {
		props: {
			product,
			categories
		}
	};
};
EditProduct.isAdmin = true
export default EditProduct