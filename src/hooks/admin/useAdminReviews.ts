import { IListItem } from '../../ui/adminList/types';
import { formatDate } from '@/utils/formateDate';
import { useQuery } from "@tanstack/react-query";
import { Reviews } from '@/services/reviews/reviews.service';

export const useAdminReviews = () => {
  const { data, isFetching } = useQuery(['get admin rewiews'],
    () => Reviews.getAllReviews(),
    {
      select: data => data?.data.map((el): IListItem => {
        return {
          id: +el.id,
          viewUrl: `/admin/product/${el?.product?.id}`,
          items: [
            el.user.name,
            el?.product?.name,
            Array.from({ length: +el.rating }).map((e) => "* ").join(" "),
            el.text,
            formatDate(el.createdAt)
          ]

        }
      })
    }
  )
  return { data, isFetching }
}