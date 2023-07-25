import { IAdminMenuItem } from "./types"

export const ADMIN_PATH = '/admin'

export const adminMenu: IAdminMenuItem[] = [
 { name: "Dashboard", route: ADMIN_PATH },
 { name: "Products", route: `${ADMIN_PATH}/products` },
 { name: "Categories", route:`${ADMIN_PATH}/categories`},
 { name: "Reviews", route: `${ADMIN_PATH}/reviews` },
 { name: "Orders", route: `${ADMIN_PATH}/orders` }
]