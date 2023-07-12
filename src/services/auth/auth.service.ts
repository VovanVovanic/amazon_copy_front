import { IAuthVariants } from './../../store/user/types';
import { auth } from "@/app/app.endpoints"
import { getContentType } from "@/app/app.helper"
import { instance } from "@/app/app.interceptor"
import { IEmailPassword, IAuthResponse } from "@/store/user/types"
import axios from "axios"
import Cookies from "js-cookie"
import { saveToStorage, saveTokenStorage } from "./auth.helper"


class AuthService{
 async auth(type: IAuthVariants, data: IEmailPassword) {
  const res = await instance({
   url: `${auth.sign}${type}`,
   method: 'POST',
   data
  })
  if (res.data.accessToken) {
   saveToStorage(res.data)
   return res.data
  }
 }
 
  async getNewTokens() {
   const refreshToken = Cookies.get('refresh-token')
   
   const res = await axios.post<string, { data: IAuthResponse}>(
    process.env.SERVER_URL + '/auth/login/refresh', {refreshToken},{headers:getContentType()}
   )

   if ((res).data.accessToken) {
    saveTokenStorage(( res).data)
   }
   return res
  }

}
export const Auth = new AuthService() 

