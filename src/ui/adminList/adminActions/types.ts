import { IListItem } from "../types";

export interface IAdminActions extends Pick<IListItem, "editUrl" | "viewUrl">{
removeHandler?:()=>void
}