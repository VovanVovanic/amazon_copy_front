import { useAdminProducts } from "@/hooks/admin/useAdminProducts"
import AdminList from "@/ui/adminList/adminList"
import Heading from "@/ui/heading/heading"
import { FC } from "react"

const Products: FC = () => {
 const {mutate,isFetching, data}=useAdminProducts()
 return (
  <>
   <Heading className="mb-7">Products</Heading>
   <AdminList
    isLoading={isFetching}
    listItems={data}
    removeHandler={mutate}
   /> 

  </>
 )
}
export default Products