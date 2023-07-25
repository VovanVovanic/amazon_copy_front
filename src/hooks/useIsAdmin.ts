import { usePathname } from "next/navigation"

export const useIsAdmin =() => {
 const pathname = usePathname()
 const isAdminPanel = pathname.startsWith("/admin")
 return{isAdminPanel, pathname}
}