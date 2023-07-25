import Users from "@/services/users/users.service"
import { useQuery } from "@tanstack/react-query"

export const useProfile = () => {
 const { data } = useQuery(['get profile'], () =>  Users.getProfile(), { select: ({ data }) => data })
 return {profile:data}
}