import { errorCatch, getContentType } from './app.helper';
import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper';
import { Auth } from '@/services/auth/auth.service';
import axios from 'axios';


export const instance = axios.create({
 baseURL: process.env.SERVER_URL,
 headers: getContentType()
})


instance.interceptors.request.use(async config => {
 const accessToken = await getAccessToken()
 if (config.headers && accessToken) {
 config.headers.Authorization = `Bearer ${accessToken}`
}
 return config
})

instance.interceptors.response.use(
 config => config,
 async error => {
  const originalRequest = error.config

  if ((error.response.status === 401 ||
   errorCatch(error) === 'jwt expired' ||
   errorCatch(error) === 'jwt must be provided') &&
   error.config && !error.config._isRetry
  ) {
   originalRequest._isRetry = true

   try {
    await Auth.getNewTokens()
    return instance.request(originalRequest)
   } catch (e) {
    if (errorCatch(e) === 'jwt expired') {
     removeFromStorage()
     throw new Error()
    }
   }
  }}
)