import Category from "@/services/caterory/category.service";
import { useQuery } from "@tanstack/react-query";

export const useCategory = () => {
 const { data, isLoading } = useQuery(
  ['get category'],
  () => Category.getAllCategories(),
  { select: ({ data }) => data }
 );
 return{data, isLoading}
}