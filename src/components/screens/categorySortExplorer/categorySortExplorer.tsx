import Catalog from "@/components/catatalog/catalog"
import Products from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { FC } from "react";
import Spinner from "@/ui/spinner/spinner";
import { IProduct } from "@/store/product/types";
import { useCategoryProductFilter } from "@/hooks/useCategoryProductFilter";
import { useTypedSelector } from "@/hooks/useTypedSelector";


const CategorySortExplorer: FC<{ initialProducts: IProduct[], title: string }> = ({ initialProducts, title }) => {
  const { slug, categoryProdictsFilter } = useCategoryProductFilter()
  const { isFilterUpdated } = useTypedSelector(state => state.filters)
  const { data, isFetching } = useQuery(['filter category products', slug, categoryProdictsFilter],
    () => Products.getProductByCategory(slug, categoryProdictsFilter), {
    initialData: initialProducts,
    enabled: isFilterUpdated,
  })
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
          <Catalog
            isFilter={true}
            title={title}
            products={data.data ? data.data : data}
            className="sm-custom:mt-10"
          />
      )}
    </>
  )
}
export default CategorySortExplorer