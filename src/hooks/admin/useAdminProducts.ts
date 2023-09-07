import { IListItem } from './../../ui/adminList/types';
import Products from "@/services/products/products.service"
import { formatDate } from '@/utils/formateDate';
import { useMutation, useQuery } from "@tanstack/react-query"

export const useAdminProducts = () => {
  const { data, isFetching, refetch } = useQuery(['get admin products'],
    () => Products.getAll(), {
    select: data => data.products.map((el): IListItem => {
      return {
        id: el.id,
        viewUrl: `/admin/product/${el.id}`,
        editUrl: `/admin/product/edit/${el.id}`,
        items: [
          el.name,
          el.category.name,
          formatDate(el.createdAt)
        ]
      }
    })
  })
  const { mutate } = useMutation(['delete product'],
    (id: number) => Products.delete(id.toString()),
    {
      onSuccess() {
        refetch()
      }
    })
  return { data, isFetching, mutate }
}