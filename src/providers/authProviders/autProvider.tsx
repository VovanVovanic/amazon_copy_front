import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { getAccessToken, getRefreshToken } from "@/services/auth/auth.helper";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./types";


const DynamicCheckRole = dynamic(()=>import('./checkRole'),{ssr:false})
const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ Component: {
 isOnlyUser
}, children }) => {

 const { user } = useAuth()
 const {logout, refresh} = useActions()
 const { pathname } = useRouter()
 
 useEffect(() => {
   const accessToken = getAccessToken()
   console.log(accessToken, "access")
  if (!accessToken) {
   refresh()
  }

 }, [])
 
 useEffect(() => {
   const refreshToken = getRefreshToken()
   console.log(refreshToken, "refresh")
  if (!refreshToken && user) {
   logout()
  }
 },[pathname])
 
 return isOnlyUser ? (
  <DynamicCheckRole Component={{isOnlyUser}}>
    {children}
   </DynamicCheckRole>
 ): (
   <>{ children }</>
   )
}

export default AuthProvider