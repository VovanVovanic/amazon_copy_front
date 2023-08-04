import Catalog from "@/components/catatalog/catalog"
import { useFilters } from "@/hooks/useFilters"
import Products from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react";
import classes from './explorer.module.scss'
import cn from 'classnames'
import Button from "@/ui/buttons/button"
import { IExplorer } from "./types"
import Filters from "@/components/filters/filters";
import Spinner from "@/ui/spinner/spinner";


const Explorer: FC<IExplorer> = ({ initialProducts }) => {
 const { isFilterUpdated, queryParams} = useFilters()
 const [filtersOpen, setFiltersOpen] = useState<boolean>(false)

 const { data, isFetching } = useQuery(['search products', queryParams],
  () => Products.getAll(queryParams), {
  initialData: initialProducts,
  enabled: isFilterUpdated
 })
 return (
  <>
   <Button
    variant="light"
   size="sm"
    onClick={() => setFiltersOpen(!filtersOpen)}
   >
    {filtersOpen ? "Close" : "Open"} filters
   </Button>
   <div
    className={cn(classes.explorer, {
     [classes.filterOpened]: filtersOpen
    })}
   >
    <Filters className={classes.explorersFilters} />
    {isFetching ? (
      <Spinner /> 
    ) : (
      <Catalog
      title={`Found ${data.length} products`} products={data.products}  paginationLength={data.length}/>
    )}

   </div>
  </>
 )
}
export default Explorer