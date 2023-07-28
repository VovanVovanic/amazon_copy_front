import Reviews from "@/components/screens/reviews/reviews"
import Layout from "@/ui/layout/layout"
import Meta from "@/ui/meta/meta"
import { NextPage } from "next"

const ReviewsPage: NextPage = () => {

  return (
    <Meta title="Reviews Admin Page">
      <Layout >
        <Reviews />
      </Layout>
    </Meta>

  )
}

export default ReviewsPage