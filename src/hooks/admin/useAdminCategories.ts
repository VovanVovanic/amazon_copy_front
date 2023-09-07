import Category from '@/services/caterory/category.service';
import { IListItem } from '../../ui/adminList/types';
import Products from "@/services/products/products.service"
import { formatDate } from '@/utils/formateDate';
import { useMutation, useQuery } from "@tanstack/react-query"

export const useAdminCategories = () => {
  const { data, isFetching, refetch } = useQuery(['get admin products'],
    () => Category.getAllCategories(), {
    select: data => data.data.map((el): IListItem => {
      return {
        id: el.id,
        viewUrl: `/admin/category/${el.id}`,
        editUrl: `/admin/category/edit/${el.id}`,
        items: [
          el.name,
          el.slug,
          formatDate(el.createdAt)
        ]
      }
    })
  })
  const { mutate } = useMutation(['delete category'],
    (id: number) => Category.delete(id.toString()),
    {
      onSuccess() {
        refetch()
      }
    })
  return { data, isFetching, mutate }
}