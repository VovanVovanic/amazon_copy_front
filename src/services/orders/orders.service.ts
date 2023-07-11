import { orders } from "@/api/api.endpoints"
import { instance } from "@/api/api.interceptor"
import { IOrder } from "@/store/order/order.types"

class OrderService{
 async getAllOrders() {
  return instance<IOrder[]>({
   url: `${orders.all}`,
   method:"GET"
  })
  
 }
}
const Order = new OrderService()

export default Order