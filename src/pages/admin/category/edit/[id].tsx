import { NextPageAuth } from "@/providers/authProviders/types"
import Category from "@/services/caterory/category.service"
import { ByFeature, ICategory } from "@/store/category/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { GetStaticPaths, GetStaticProps } from "next"

const EditCategory: NextPageAuth<{ category: ICategory }> = ({category}) => {

  return (
    <Meta title="Categories Admin Edit Page">
      <Layout >
					<div>Edit Category {category.name}</div>
      </Layout>
    </Meta>

  )
}


export const getStaticPaths:GetStaticPaths = async()=>{
	const categories = await Category.getAllCategories()
	const paths = categories.data.map((el)=>{
			return {params:{id:String(el.id)}}
	})
return{paths, fallback:'blocking'}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const {data:category} = await Category.getCategoryByFeature(ByFeature.Id, params?.id as string,"newest")

	return{
			props:{
					category
			}
	}
}
EditCategory.isAdmin = true
export default EditCategory