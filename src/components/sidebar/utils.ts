import { ICategory } from "@/store/category/types";
import { IAdminMenuItem } from "./types";

export const convertToMenuFormat = (cats?: ICategory[]): IAdminMenuItem[] => {
 if(!cats)return []
 return cats.map((el)=>({name:el.name, route: `/category/${el.slug}`}))
}