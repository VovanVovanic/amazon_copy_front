import { orders } from "@/app/app.endpoints"
import { instance } from "@/app/app.interceptor"
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