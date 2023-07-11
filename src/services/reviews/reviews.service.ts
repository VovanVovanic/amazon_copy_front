import { reviews } from "@/api/api.endpoints"
import { instance } from "@/api/api.interceptor"
import { IReview } from "@/store/reviews/types"

class ReviewsService {

 async getAllReviews() {
  return instance<IReview[]>({
   url: `${reviews.all}`,
   method: "GET"
  })
  
 }

 async create(data: { name: string }, productId: string) {
  return instance<IReview>({
   url: `${reviews.create}${productId}`,
   method: "POST",
   data
  })
  
 }
 async getAverageReview(productId: string) {
  return instance<{avg_rating:number}>({
   url: `${reviews.average}${productId}`,
   method: "GET"
  })
 }
}

const Reviews = new ReviewsService()
export default Reviews