import { useAdminReviews } from "@/hooks/admin/useAdminReviews"
import AdminList from "@/ui/adminList/adminList"
import Heading from "@/ui/heading/heading"
import { FC } from "react"

const Reviews: FC = () => {
 const { isFetching, data } = useAdminReviews()
 console.log(data, "ddd")
 return (
  <>
   <Heading className="mb-7">Reviews</Heading>
   <AdminList
    isLoading={isFetching}
    listItems={data}
   /> 

  </>
 )
}
export default Reviews