import { IListItem } from "../../ui/adminList/types";
import { formatDate } from "@/utils/formateDate";
import { useQuery } from "@tanstack/react-query";
import Order from "@/services/orders/orders.service";

export const useAdminOrders = () => {
  const { data, isFetching } = useQuery(
    ["get admin orders"],
    () => Order.getAllOrders(),
    {
      select: (data) =>
        data.data.map((el): IListItem => {
          return {
            id: el.id,
            viewUrl: `/category/${el.id}`,
            items: [
              `#${el.id}`,
              el.status,
              formatDate(el.createdAt),
              el.total.toString(),
            ],
          };
        }),
    }
  );

  return { data, isFetching };
};
