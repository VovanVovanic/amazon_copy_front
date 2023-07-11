import { saveTokenStorage, saveToStorage } from './auth.helper';
import { getContentType } from './../api/api.helper';
import axios from "axios"
import Cookies from "js-cookie"
import { IAuthResponse, IEmailPassword } from '@/store/user/types';
import { instance } from '@/api/api.interceptor';

class AuthService{
 async auth(type: 'login' | 'register', data: IEmailPassword) {
  const res = await instance({
   url: `/auth/${type}`,
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
   
   const response = await axios.post<string, { data: IAuthResponse}>(
    process.env.SERVER_URL + '/auth/login/refresh', {refreshToken},{headers:getContentType()}
   )

   if ((response).data.accessToken) {
    saveTokenStorage((await response).data)
   }
   return response
  }

}
const Auth = new AuthService() 

export default Auth