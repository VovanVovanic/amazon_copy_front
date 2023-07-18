

import Catalog from "@/components/catatalog/catalog"
import{ GetStaticProps, GetStaticPaths,} from 'next'
import Category from "@/services/caterory/category.service"
import Products from "@/services/products/products.service"
import { ByFeature, ICategory } from "@/store/category/types"
import { IProduct } from "@/store/product/types"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { useQuery } from "@tanstack/react-query"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"

const CategoryPage: NextPage<{products:IProduct[],category:ICategory}> = ({products,category}) => {
 return (
   <Meta title = {category.name}>
     <Layout >
       <Catalog title={category.name} goods={products || []}/>
     </Layout>
     </Meta>

 )
}


export const getStaticPaths:GetStaticPaths = async()=>{
  const categories = await Category.getAllCategories()
  const paths = categories.data.map((el)=>{
    return {params:{slug: el.slug}}
  })
return{paths, fallback:'blocking'}
}

export const getStaticProps: GetStaticProps = async({params})=>{
  const{data:products} = await Products.getProductByCategory(params?.slug as string)

  const {data:category} = await Category.getCategoryByFeature(ByFeature.Slug, params?.slug as string)

  return{
    props:{
      products,
      category
    }
  }
}

export default CategoryPage