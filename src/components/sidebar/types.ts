import { ReactNode } from "react"

export interface IAdminMenuItem {
 name: string
 route: string
}
export interface IMenuMobile {
 open: boolean
 children: ReactNode
 onClose: () => void
}

export interface IMenu {
 variant: "mobile" | "desk"
}