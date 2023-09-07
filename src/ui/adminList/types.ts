export interface IAdminList {
 listItems?: IListItem[]
 isLoading: boolean
 removeHandler?: (el: IListItem) => void
}

export interface IListItem {
 id: number
 editUrl?: string
 viewUrl?: string
 items: string[]
}

export interface IAdminListItem {
 listItem: IListItem
 removeHandler?: () => void
}