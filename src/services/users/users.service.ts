import { users } from "@/api/api.endpoints"
import { instance } from "@/api/api.interceptor"
import { IFullUser, IUser, UserUpdate } from "@/store/user/types"

class UsersService {

 async getProfile() {
  const p = await instance<IFullUser>({
   url: `${users.profile}`,
   method: "GET"
  })
  return p

 }

 async updateProfile(data: UserUpdate) {
  return instance<IUser>({
   url: `${users.update}`,
   method: "PUT",
   data
  })

 }

 async deleteProfile(id: number) {
  return instance<IUser>({
   url: `${users.delete}`,
   method: "DELETE",
  })

 }

 async toggleFeatures(productId: number) {
  return instance<{ message: string }>({
   url: `${users.favorites}${productId}`,
   method: "PATCH"
  })

 }

}

const Users = new UsersService()
export default Users