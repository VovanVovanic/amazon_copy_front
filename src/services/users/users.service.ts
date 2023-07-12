import { users } from "@/app/app.endpoints"
import { instance } from "@/app/app.interceptor"
import { IUser, UserUpdate } from "@/store/user/types"

class UsersService {

 async getProfile() {
  return instance<IUser[]>({
   url: `${users.profile}`,
   method: "GET"
  })

 }

 async updateProfile(data: UserUpdate) {
  return instance<IUser>({
   url: `${users.update}`,
   method: "PUT",
   data
  })

 }

 async toggleFeatures(productId: string) {
  return instance<{ message: string }>({
   url: `${users.favorites}${productId}`,
   method: "PATCH"
  })

 }

}

const Users = new UsersService()
export default Users