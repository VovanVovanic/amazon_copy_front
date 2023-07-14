import Catalog from "@/components/catatalog/catalog"
import { NextPageAuth } from "@/providers/authProviders/types"
import Products from "@/services/products/products.service"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"

const SearchResultPage: NextPageAuth = () => {
 const { query } = useRouter()
 const { data } = useQuery(['search products', query.term],
  () => Products.getAll({
  searchTerm:query.term as string
 }))
 return (
   <Meta title = "Search Result">
     <Layout >
       <Catalog title={`Found for "${query.term || ""}"`} goods={data?.products}/>
     </Layout>
     </Meta>

 )
}

export default SearchResultPage