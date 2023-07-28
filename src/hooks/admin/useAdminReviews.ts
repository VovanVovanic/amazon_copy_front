import Category from '@/services/caterory/category.service';
import { IListItem } from '../../ui/adminList/types';
import Products from "@/services/products/products.service"
import { formatDate } from '@/utils/formateDate';
import { useMutation, useQuery } from "@tanstack/react-query"
import { Reviews } from '@/services/reviews/reviews.service';

export const useAdminReviews = () => {
 const { data, isFetching } = useQuery(['get admin reviews'],
  () => Reviews.getAllReviews(), {
   select: data => data.data.map((el): IListItem => {
    return {
     id: +el.id,
     viewUrl: `/review/${el.id}`,
     items: [
       el.user.name,
       el.product.name,
       Array.from({length: +el.rating}).map((e)=>"* ").join(" "),
      formatDate(el.createdAt)
     ]
   }
  })
  })

  return { data, isFetching} 
}