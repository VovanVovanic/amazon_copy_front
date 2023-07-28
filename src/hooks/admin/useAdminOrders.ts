import Category from '@/services/caterory/category.service';
import { IListItem } from '../../ui/adminList/types';
import Products from "@/services/products/products.service"
import { formatDate } from '@/utils/formateDate';
import { useMutation, useQuery } from "@tanstack/react-query"
import Order from '@/services/orders/orders.service';

export const useAdminOrders = () => {
 const { data, isFetching} = useQuery(['get admin orders'],
  () => Order.getAllOrders(), {
   select: data => data.data.map((el): IListItem => {
    return {
     id: el.id,
     viewUrl: `/category/${el.id}`,
      items: [
       `#${el.id}`,
       el.status,
       formatDate(el.createdAt),
      el.total.toString()
     ]
   }
  })
  })

  return { data, isFetching} 
}