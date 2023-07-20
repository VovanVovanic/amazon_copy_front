import { orders } from "@/app/app.endpoints"
import { instance } from "@/app/app.interceptor"
import { IOrder, IPaymentOder } from "@/store/order/order.types"

class OrderService{
 async getAllOrders() {
  return instance<IOrder[]>({
   url: `${orders.all}`,
   method:"GET"
  })
  
 }

 async createPayment(data:IPaymentOder) {
    return instance<{confirmation:{confirmation_url:string}}>({
     url: `${orders.all}`,
     method:"POST",
     data
    })
    
   }
}
const Order = new OrderService()

export default Order