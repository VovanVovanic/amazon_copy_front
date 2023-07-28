
import { useAdminOrders } from "@/hooks/admin/useAdminOrders"
import AdminList from "@/ui/adminList/adminList"
import Heading from "@/ui/heading/heading"
import { FC } from "react"

const Orders: FC = () => {
 const {isFetching, data}=useAdminOrders()
 return (
  <>
   <Heading className="mb-7">Orders</Heading>
   <AdminList
    isLoading={isFetching}
    listItems={data}
   /> 

  </>
 )
}
export default Orders