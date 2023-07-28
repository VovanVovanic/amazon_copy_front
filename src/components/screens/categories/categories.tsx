import { useAdminCategories } from "@/hooks/admin/useAdminCategories"
import AdminList from "@/ui/adminList/adminList"
import Heading from "@/ui/heading/heading"
import { FC } from "react"

const Categories: FC = () => {
 const {mutate,isFetching, data}=useAdminCategories()
 return (
  <>
   <Heading className="mb-7">Categories</Heading>
   <AdminList
    isLoading={isFetching}
    listItems={data}
    removeHandler={mutate}
   /> 

  </>
 )
}
export default Categories